import RingCentral from '@rc-ex/core';
import {
  RestRequestConfig,
  RestResponse,
  RestMethod,
} from '@rc-ex/core/lib/Rest';
import SdkExtension from '@rc-ex/core/lib/SdkExtension';
import WS, {OPEN} from 'isomorphic-ws';

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
import {EventEmitter} from 'events';

export enum Events {
  autoRecoverSuccess = 'autoRecoverSuccess',
  autoRecoverFailed = 'autoRecoverFailed',
  autoRecoverError = 'autoRecoverError',
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

  request = request; // request method was moved to another file to keep this file short

  constructor(options: WebSocketOptions = {}) {
    super();
    this.options = options;
    this.options.restOverWebSocket ??= false;
    this.options.debugMode ??= false;
    this.options.autoRecover ??= true;
  }

  set enabled(value: boolean) {
    this._enabled = value;
    for (const subscription of this.subscriptions ?? []) {
      subscription.enabled = value;
    }
  }

  async install(rc: RingCentral) {
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
    await this.connect();

    // start of auto recover
    if (this.options.autoRecover) {
      let interval = 10000; // check WSG connection every 10 seconds
      const check = async () => {
        if (this.ws?.readyState !== OPEN) {
          clearInterval(this.intervalHandle!);
          try {
            await this.recover();
            interval = 10000;
            if (this.options.debugMode) {
              console.debug('Auto recover success');
            }
            this.eventEmitter.emit(
              this.connectionDetails.recoveryState === 'Successful'
                ? Events.autoRecoverSuccess
                : Events.autoRecoverFailed,
              this.ws
            );
          } catch (e) {
            interval += 10000;
            if (interval > 60000) {
              interval = 60000; // max interval 60 seconds
            }
            if (this.options.debugMode) {
              console.debug('Auto recover error:', e);
            }
            this.eventEmitter.emit(Events.autoRecoverError, e);
          }
          this.intervalHandle = setInterval(check, interval);
        }
      };
      this.intervalHandle = setInterval(check, interval);
    }
    // end of auto recover
  }

  async recover() {
    if (this.ws?.readyState === OPEN) {
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
      await this.connect(false); // connect to WSG but do not recover
    } else {
      await this.connect(true); // connect to WSG and recover
    }
    this.recoverTimestamp = undefined;
  }

  async connect(recoverSession = false) {
    const r = await this.rc.post('/restapi/oauth/wstoken');
    this.wsToken = r.data as WsToken;
    let wsUri = `${this.wsToken.uri}?access_token=${this.wsToken.ws_access_token}`;
    if (recoverSession) {
      wsUri = `${wsUri}&wsc=${this.wsc.token}`;
    }
    this.ws = new WS(wsUri);

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
