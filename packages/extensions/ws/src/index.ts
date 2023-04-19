/* eslint-disable no-console */
import RingCentral from '@rc-ex/core';
import {
  RestMethod,
  RestRequestConfig,
  RestResponse,
} from '@rc-ex/core/lib/types';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';
import WS, { MessageEvent } from 'isomorphic-ws';
import hyperid from 'hyperid';
import { EventEmitter } from 'events';
import waitFor from 'wait-for-async';
import RestException from '@rc-ex/core/lib/RestException';
import SubscriptionInfo from '@rc-ex/core/lib/definitions/SubscriptionInfo';

import { request } from './rest';
import {
  WsToken,
  ConnectionDetails,
  WebSocketOptions,
  WsgEvent,
  Wsc,
  WebSocketExtensionInterface,
} from './types';
import Subscription from './subscription';
import ConnectionException from './exceptions/ConnectionException';
import Utils from './utils';

const CONNECTING = 0;
const OPEN = 1;

const uuid = hyperid();

export enum Events {
  autoRecoverSuccess = 'autoRecoverSuccess',
  autoRecoverFailed = 'autoRecoverFailed',
  autoRecoverError = 'autoRecoverError',
  newWebSocketObject = 'newWebSocketObject',
  newWsc = 'newWsc',
  connectionReady = 'connectionReady',
}

class WebSocketExtension extends SdkExtension {
  eventEmitter = new EventEmitter();

  options: WebSocketOptions;

  rc!: RingCentral;

  wsToken?: WsToken;

  wsTokenExpiresAt = 0;

  ws!: WS;

  connectionDetails!: ConnectionDetails;

  wsc?: Wsc;

  subscription?: Subscription;

  // for auto recover
  intervalHandle?: NodeJS.Timeout;

  recoverTimestamp?: number;

  pingServerHandle?: NodeJS.Timeout;

  request = request; // request method was moved to another file to keep this file short

  constructor(options: WebSocketOptions = {}) {
    super();
    this.options = options;
    this.options.restOverWebSocket ??= false;
    this.options.debugMode ??= false;
    this.options.autoRecover ??= {
      enabled: true,
    };
    this.options.autoRecover.checkInterval ??= (retriesAttempted) => {
      const interval = 2000 + 2000 * retriesAttempted;
      return Math.min(8000, interval);
    };
    this.options.autoRecover.pingServerInterval ??= 30000;
  }

  disable() {
    super.disable();
    if (this.subscription) {
      this.subscription.enabled = false;
    }
  }

  async install(rc: RingCentral) {
    this.rc = rc;
    if (this.options.restOverWebSocket) {
      const request = rc.request.bind(rc);
      rc.request = async <T>(
        method: RestMethod,
        endpoint: string,
        content?: {},
        queryParams?: {},
        config?: RestRequestConfig,
      ): Promise<RestResponse<T>> => {
        if (!this.enabled || !this.options.restOverWebSocket) {
          return request<T>(method, endpoint, content, queryParams, config);
        }
        if (
          // the following cannot be done with WebSocket
          (config?.headers?.getContentType?.toString())?.includes(
            'multipart/form-data',
          )
          || config?.responseType === 'arraybuffer'
          || endpoint.startsWith('/restapi/oauth/') // token, revoke, wstoken
        ) {
          return request<T>(method, endpoint, content, queryParams, config);
        }
        return this.request<T>(method, endpoint, content, queryParams, config);
      };
    }

    // should recover if this.options.wscToken
    let connectMethod = this.connect.bind(this);
    if (this.options.wscToken) {
      this.wsc = {
        token: this.options.wscToken,
        sequence: 0,
      };
      connectMethod = this.recover.bind(this);
    }

    if (!this.options.autoRecover!.enabled) {
      await connectMethod();
      return;
    }

    // code after is for auto recover
    try {
      await connectMethod();
    } catch (e) {
      if (e instanceof RestException) {
        throw e; // such as InsufficientPermissions
      }
      if (this.options.debugMode) {
        console.debug('Initial connect failed:', e);
      }
    }
    let retriesAttempted = 0;
    let checking = false;
    const check = async () => {
      if (!this.enabled) {
        return;
      }
      if (this.options.autoRecover?.enabled !== true) {
        return;
      }
      if (checking) {
        return;
      }
      checking = true;
      if (this.ws?.readyState !== OPEN && this.ws?.readyState !== CONNECTING) {
        clearInterval(this.intervalHandle!);
        try {
          await this.recover();
          retriesAttempted = 0;
          if (this.options.debugMode) {
            console.debug(
              `Auto recover done, recoveryState: ${this.connectionDetails.recoveryState}`,
            );
          }
          this.eventEmitter.emit(
            this.connectionDetails.recoveryState === 'Successful'
              ? Events.autoRecoverSuccess
              : Events.autoRecoverFailed,
            this.ws,
          );
        } catch (e) {
          if (e instanceof RestException) {
            throw e; // such as InsufficientPermissions
          }
          retriesAttempted += 1;
          if (this.options.debugMode) {
            console.debug('Auto recover error:', e);
          }
          this.eventEmitter.emit(Events.autoRecoverError, e);
        }
        this.intervalHandle = setInterval(
          check,
          this.options.autoRecover!.checkInterval!(retriesAttempted),
        );
      }
      checking = false;
    };
    this.intervalHandle = setInterval(
      check,
      this.options.autoRecover!.checkInterval!(retriesAttempted),
    );

    // browser only code start
    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('offline', () => {
        if (this.pingServerHandle) {
          clearTimeout(this.pingServerHandle);
        }
        this.ws?.close();
      });
      window.addEventListener('online', () => {
        check();
      });
    }
    // browser only code end
  }

  _recoverPromise?: Promise<void>;

  async recover() {
    if (this._recoverPromise) {
      return this._recoverPromise;
    }
    this._recoverPromise = this._recover();
    try {
      await this._recoverPromise;
    } finally {
      this._recoverPromise = undefined;
    }
    return undefined;
  }

  async _recover() {
    if (this.ws?.readyState === OPEN || this.ws?.readyState === CONNECTING) {
      return;
    }
    if (!this.wsc || !this.wsc.token) {
      await this.connect(false); // connect to WSG but do not recover
      return;
    }
    if (this.recoverTimestamp === undefined) {
      this.recoverTimestamp = Date.now();
    }
    if (
      this.connectionDetails !== undefined
      && Date.now() - this.recoverTimestamp
      > this.connectionDetails.recoveryTimeout * 1000
    ) {
      if (this.options.debugMode) {
        console.debug('connect to WSG but do not recover');
      }
      await this.connect(false); // connect to WSG but do not recover
    } else {
      if (this.options.debugMode) {
        console.debug('connect to WSG and recover');
      }
      await this.connect(true); // connect to WSG and recover
    }
    this.recoverTimestamp = undefined;
    this.enable();
  }

  async pingServer() {
    if (this.options.autoRecover?.enabled !== true) {
      return;
    }
    try {
      if (this.ws?.ping) {
        // node.js
        this.ws?.ping();
      } else {
        // browser
        await this.ws?.send(
          JSON.stringify([
            {
              type: 'Heartbeat',
              messageId: uuid(),
            },
          ]),
        );
      }
    } catch (e) {
      this.ws?.close(); // Explicitly mark WS as closed
    }
  }

  _connectPromise?: Promise<void>;

  async connect(recoverSession?: boolean) {
    if (this._connectPromise) {
      return this._connectPromise;
    }
    this._connectPromise = this._connect(recoverSession);
    try {
      await this._connectPromise;
    } finally {
      this._connectPromise = undefined;
    }
    return undefined;
  }

  async _connect(recoverSession = false) {
    if (Date.now() > this.wsTokenExpiresAt) {
      const r = await this.rc.post('/restapi/oauth/wstoken');
      this.wsToken = r.data as WsToken;
      this.wsTokenExpiresAt = Date.now() + (this.wsToken.expires_in - 10) * 1000;
    }
    let wsUri = '';
    if (this.wsToken) {
      wsUri = `${this.wsToken.uri}?access_token=${this.wsToken.ws_access_token}`;
      if (recoverSession && this.wsc) {
        wsUri += `&wsc=${this.wsc.token}`;
      }
    }
    this.ws = new WS(wsUri);
    this.eventEmitter.emit(Events.newWebSocketObject, this.ws);

    // override send method to wait for connecting
    const send = this.ws.send.bind(this.ws);
    this.ws.send = async (s: string) => {
      if (this.ws.readyState === CONNECTING) {
        await waitFor({
          interval: 100,
          condition: () => this.ws.readyState !== CONNECTING,
        });
      }
      await send(s);
    };

    if (this.options.autoRecover?.enabled) {
      this.ws.addEventListener('message', () => {
        if (this.pingServerHandle) {
          clearTimeout(this.pingServerHandle);
        }
        this.pingServerHandle = setTimeout(
          () => this.pingServer(),
          this.options.autoRecover!.pingServerInterval,
        );
      });
    }

    // debug mode to print all WebSocket traffic
    if (this.options.debugMode) {
      Utils.debugWebSocket(this.ws);
    }

    // listen for new wsc data
    this.ws.addEventListener('message', (mEvent: MessageEvent) => {
      const event = mEvent as WsgEvent;
      const [meta, body] = Utils.splitWsgData(event.data);
      if (
        meta.wsc
        && (!this.wsc
          || (meta.type === 'ConnectionDetails' && body.recoveryState)
          || this.wsc.sequence < meta.wsc.sequence)
      ) {
        this.wsc = meta.wsc;
        this.eventEmitter.emit(Events.newWsc, this.wsc);
      }
    });

    // get initial ConnectionDetails data
    const [meta, body, event] = await Utils.waitForWebSocketMessage(
      this.ws,
      (meta) => meta.type === 'ConnectionDetails' || meta.type === 'Error',
    );
    if (meta.type === 'Error') {
      throw new ConnectionException(event);
    }
    this.connectionDetails = body;

    // fired when ws connection is ready for creating subscription
    this.eventEmitter.emit(Events.connectionReady, this.ws);

    // recover the subscription, if it exists and enabled
    if (this.subscription && this.subscription.enabled) {
      // because we have a new ws object
      this.subscription.setupWsEventListener();
      if (
        !recoverSession
        || this.connectionDetails.recoveryState === 'Failed'
      ) {
        // create new subscription if don't recover existing one
        await this.subscription.subscribe();
      }
    }
  }

  // keepInterval means we do not clear the interval
  async revoke(keepInterval = false) {
    await this.subscription?.revoke();
    this.subscription = undefined;
    if (!keepInterval && this.intervalHandle) {
      clearInterval(this.intervalHandle);
    }
    if (this.pingServerHandle) {
      clearTimeout(this.pingServerHandle);
    }
    this.ws?.close();
    this.wsc = undefined;
    this.wsToken = undefined;
    this.wsTokenExpiresAt = 0;
    this.disable();
  }

  async subscribe(
    eventFilters: string[],
    callback: (event: {}) => void,
    cache: SubscriptionInfo | undefined | null = undefined,
  ) {
    const subscription = new Subscription(this as WebSocketExtensionInterface, eventFilters, callback);
    if (cache === undefined || cache === null) {
      await subscription.subscribe();
    } else {
      subscription.subscriptionInfo = cache;
      await subscription.refresh();
    }
    this.subscription = subscription;
    return subscription;
  }
}

export default WebSocketExtension;
