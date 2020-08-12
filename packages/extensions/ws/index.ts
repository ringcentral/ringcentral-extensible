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
  WsgMeta,
  ConnectionBody,
} from './types';
import Subscription from './subscription';
import {ConnectionException} from './exceptions';
import Utils from './utils';

class WebSocketExtension extends SdkExtension {
  restOverWebsocket: boolean;
  debugMode: boolean;
  rc!: RingCentral;
  wsToken!: WsToken;
  ws!: WS;
  connectionDetails!: ConnectionDetails;
  subscriptions: Subscription[] = [];
  intervalHandle!: NodeJS.Timeout;

  request = request; // request method was moved to another file to keep this file short

  constructor(options?: WebSocketOptions) {
    super();
    this.restOverWebsocket = options?.restOverWebSocket ?? false;
    this.debugMode = options?.debugMode ?? false;
  }

  get enabled() {
    return super.enabled;
  }
  set enabled(value: boolean) {
    super.enabled = value;
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
      if (!this.enabled || !this.restOverWebsocket) {
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

    this.intervalHandle = setInterval(() => {
      if (this.ws.readyState !== OPEN) {
        try {
          this.recover();
          console.debug('WebSocket connection closed and auto recovered');
        } catch (e) {
          console.debug('WebSocket auto recover failed:', e);
        }
      }
    }, 60000);
  }

  async recover() {
    if (this.connectionDetails?.wsc?.token === undefined) {
      throw new Error('No existing session to recover');
    }
    await this.connect(true);
  }

  async reconnect() {
    await this.connect(false);
  }

  private async connect(recoverSession = false) {
    const r = await this.rc.post('/restapi/oauth/wstoken');
    this.wsToken = r.data as WsToken;
    let wsUri = `${this.wsToken.uri}?access_token=${this.wsToken.ws_access_token}`;
    if (recoverSession) {
      wsUri = `${wsUri}&wsc=${this.connectionDetails!.wsc!.token}`;
    }
    this.ws = new WS(wsUri);

    // debug mode to print all WebSocket traffic
    if (this.debugMode) {
      Utils.debugWebSocket(this.ws);
    }

    // get initial ConnectionDetails data
    const [meta, body, event] = await Utils.waitForWebSocketMessage(
      this.ws,
      meta => meta.type === 'ConnectionDetails' || meta.type === 'Error'
    );
    if (meta.type === 'Error') {
      throw new ConnectionException(event);
    }
    this.connectionDetails = {...meta, body};
    if (
      recoverSession &&
      this.connectionDetails.body.recoveryState === 'Failed'
    ) {
      recoverSession = false;
    }

    // listen for new ConnectionDetails data
    this.ws.addEventListener('message', (event: WsgEvent) => {
      const [meta, body]: [WsgMeta, ConnectionBody] = Utils.splitWsgData(
        event.data
      );
      if (meta.type === 'ConnectionDetails' && meta.wsc) {
        if (
          body.recoveryState ||
          this.connectionDetails.wsc!.sequence < meta.wsc.sequence
        )
          this.connectionDetails = {...meta, body};
      }
    });

    // recover all subscriptions, if there are any
    for (const subscription of this.subscriptions) {
      // because we have a new ws object
      subscription.setupWsEventListener();
      if (!recoverSession) {
        // create new subscription if don't recover existing one
        await subscription.subscribe();
      }
    }
  }

  async revoke() {
    for (const subscription of this.subscriptions) {
      await subscription.revoke();
    }
    clearInterval(this.intervalHandle);
    this.ws.close();
  }

  async subscribe(eventFilters: string[], callback: (event: {}) => void) {
    const subscription = new Subscription(this, eventFilters, callback);
    await subscription.subscribe();
    this.subscriptions.push(subscription);
    return subscription;
  }
}

export default WebSocketExtension;
