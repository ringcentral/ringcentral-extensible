import RingCentral from '@rc-ex/core';
import {
  RestRequestConfig,
  RestResponse,
  RestMethod,
} from '@rc-ex/core/lib/Rest';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';
import WS, {OPEN, CONNECTING} from 'isomorphic-ws';
import hyperid from 'hyperid';
import {EventEmitter} from 'events';
import waitFor from 'wait-for-async';
import RateLimitExtension from '@rc-ex/rate-limit';

import {request} from './rest';
import {
  WsToken,
  ConnectionDetails,
  WebSocketOptions,
  WsgEvent,
  Wsc,
} from './types';
import Subscription from './subscription';
import {ConnectionException} from './exceptions';
import Utils from './utils';

const uuid = hyperid();

export enum Events {
  autoRecoverSuccess = 'autoRecoverSuccess',
  autoRecoverFailed = 'autoRecoverFailed',
  autoRecoverError = 'autoRecoverError',
  newWebSocketObject = 'newWebSocketObject',
}

class WebSocketExtension extends SdkExtension {
  eventEmitter = new EventEmitter();

  options: WebSocketOptions;
  rc!: RingCentral;
  wsToken!: WsToken;
  ws!: WS;
  connectionDetails!: ConnectionDetails;
  wsc!: Wsc;
  subscriptions: Subscription[] = [];

  // for auto recover
  intervalHandle?: NodeJS.Timeout;
  recoverTimestamp?: number;
  pingServerHandle?: NodeJS.Timeout;

  request = request; // request method was moved to another file to keep this file short

  rateLimitExtension: RateLimitExtension = new RateLimitExtension(); // to rate limit /restapi/oauth/wstoken

  constructor(options: WebSocketOptions = {}) {
    super();
    this.options = options;
    this.options.restOverWebSocket ??= false;
    this.options.debugMode ??= false;
    this.options.autoRecover ??= {
      enabled: true,
    };
    this.options.autoRecover.checkInterval ??= retriesAttempted => {
      const interval = 2000 + 2000 * retriesAttempted;
      return Math.min(8000, interval);
    };
    this.options.autoRecover.pingServerInterval ??= 30000;
  }

  get enabled() {
    return this._enabled;
  }
  set enabled(value: boolean) {
    this._enabled = value;
    for (const subscription of this.subscriptions ?? []) {
      subscription.enabled = value;
    }
  }

  async install(rc: RingCentral) {
    this.rateLimitExtension.enabled = false;
    await rc.installExtension(this.rateLimitExtension);
    this.rc = rc;
    const request = rc.request.bind(rc);
    rc.request = async <T>(
      method: RestMethod,
      endpoint: string,
      content?: {},
      queryParams?: {},
      config?: RestRequestConfig
    ): Promise<RestResponse<T>> => {
      if (!this.enabled || !this.options.restOverWebSocket) {
        return request<T>(method, endpoint, content, queryParams, config);
      }
      if (
        // the following cannot be done with WebSocket
        config?.headers?.['Content-Type'].includes('multipart/form-data') ||
        config?.responseType === 'arraybuffer' ||
        endpoint.startsWith('/restapi/oauth/') // token, revoke, wstoken
      ) {
        return request<T>(method, endpoint, content, queryParams, config);
      }
      return this.request<T>(method, endpoint, content, queryParams, config);
    };
    if (!this.options.autoRecover!.enabled) {
      await this.connect();
      return;
    }

    // code after is for auto recover
    try {
      await this.connect();
    } catch (e) {
      if (this.options.debugMode) {
        console.debug('Initial connect failed:', e);
      }
    }
    let retriesAttempted = 0;
    const check = async () => {
      if (this.ws?.readyState !== OPEN && this.ws?.readyState !== CONNECTING) {
        clearInterval(this.intervalHandle!);
        try {
          await this.recover();
          retriesAttempted = 0;
          if (this.options.debugMode) {
            console.debug(
              `Auto recover done, recoveryState: ${this.connectionDetails.recoveryState}`
            );
          }
          this.eventEmitter.emit(
            this.connectionDetails.recoveryState === 'Successful'
              ? Events.autoRecoverSuccess
              : Events.autoRecoverFailed,
            this.ws
          );
        } catch (e) {
          retriesAttempted += 1;
          if (this.options.debugMode) {
            console.debug('Auto recover error:', e);
          }
          this.eventEmitter.emit(Events.autoRecoverError, e);
        }
        this.intervalHandle = setInterval(
          check,
          this.options.autoRecover!.checkInterval!(retriesAttempted)
        );
      }
    };
    this.intervalHandle = setInterval(
      check,
      this.options.autoRecover!.checkInterval!(retriesAttempted)
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

  async recover() {
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
      Date.now() - this.recoverTimestamp >
      this.connectionDetails.recoveryTimeout * 1000
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
  }

  async pingServer() {
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
          ])
        );
      }
    } catch (e) {
      this.ws?.close(); // Explicitly mark WS as closed
    }
  }

  async connect(recoverSession = false) {
    this.rateLimitExtension.enabled = true;
    const r = await this.rc.post('/restapi/oauth/wstoken');
    this.rateLimitExtension.enabled = false;
    this.wsToken = r.data as WsToken;
    let wsUri = `${this.wsToken.uri}?access_token=${this.wsToken.ws_access_token}`;
    if (recoverSession) {
      wsUri = `${wsUri}&wsc=${this.wsc.token}`;
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
          this.options.autoRecover!.pingServerInterval
        );
      });
    }

    // debug mode to print all WebSocket traffic
    if (this.options.debugMode) {
      Utils.debugWebSocket(this.ws);
    }

    // listen for new wsc data
    this.ws.addEventListener('message', (event: WsgEvent) => {
      const [meta, body] = Utils.splitWsgData(event.data);
      if (
        meta.wsc &&
        (!this.wsc ||
          (meta.type === 'ConnectionDetails' && body.recoveryState) ||
          this.wsc.sequence < meta.wsc.sequence)
      ) {
        this.wsc = meta.wsc;
      }
    });

    // get initial ConnectionDetails data
    const [meta, body, event] = await Utils.waitForWebSocketMessage(
      this.ws,
      meta => meta.type === 'ConnectionDetails' || meta.type === 'Error'
    );
    if (meta.type === 'Error') {
      throw new ConnectionException(event);
    }
    this.connectionDetails = body;

    // recover all subscriptions, if there are any
    for (const subscription of this.subscriptions.filter(sub => sub.enabled)) {
      // because we have a new ws object
      subscription.setupWsEventListener();
      if (
        !recoverSession ||
        this.connectionDetails.recoveryState === 'Failed'
      ) {
        // create new subscription if don't recover existing one
        await subscription.subscribe();
      }
    }
  }

  async revoke() {
    for (const subscription of this.subscriptions) {
      await subscription.revoke();
    }
    this.subscriptions = [];
    if (this.intervalHandle) {
      clearInterval(this.intervalHandle);
    }
    if (this.pingServerHandle) {
      clearTimeout(this.pingServerHandle);
    }
    this.ws?.close();
  }

  async subscribe(eventFilters: string[], callback: (event: {}) => void) {
    const subscription = new Subscription(this, eventFilters, callback);
    await subscription.subscribe();
    this.subscriptions.push(subscription);
    return subscription;
  }
}

export default WebSocketExtension;
