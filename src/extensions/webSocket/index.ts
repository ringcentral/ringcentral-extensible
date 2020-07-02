/* eslint-disable node/no-unpublished-import */
import WS from 'isomorphic-ws';
import waitFor from 'wait-for-async';

import RingCentral from '../..';
import {RestRequestConfig, RestResponse, RestMethod} from '../../Rest';
import SdkExtension from '..';
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
import WsgException from './wsgException';
import Utils from './utils';

class WebSocketExtension extends SdkExtension {
  static sandboxServer = 'wss://ws-api.devtest.ringcentral.com/ws';
  static productionServer = 'wss://ws-api.ringcentral.com/ws';

  restOverWebsocket: boolean;
  debugMode: boolean;
  rc!: RingCentral;
  wsToken!: WsToken;
  ws!: WS;
  connectionDetails?: ConnectionDetails;
  subscriptions: Subscription[] = [];

  request = request; // request method was moved to another file to keep this file short

  constructor(options?: WebSocketOptions) {
    super();
    this.restOverWebsocket = options?.restOverWebSocket ?? false;
    this.debugMode = options?.debugMode ?? false;
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

    // listen for connectionDetails data
    this.connectionDetails = undefined;
    const connectionDetailsListener = (event: WsgEvent) => {
      const [meta, body]: [WsgMeta, ConnectionBody] = Utils.splitWsgData(
        event.data
      );
      if (meta.type === 'ConnectionDetails' && meta.wsc) {
        if (
          !this.connectionDetails ||
          body.recoveryState ||
          (this.connectionDetails &&
            this.connectionDetails.wsc!.sequence < meta.wsc.sequence)
        )
          this.connectionDetails = {...meta, body};
      } else if (!this.connectionDetails && meta.type === 'Error') {
        // session recovery failed
        throw new WsgException(event);
      }
    };
    this.ws.addEventListener('message', connectionDetailsListener);

    // recover all subscriptions, if there are any
    for (const subscription of this.subscriptions) {
      // because we have a new ws object
      subscription.setupWsEventListener();
      if (!recoverSession) {
        // create new subscription if don't recover existing one
        await subscription.subscribe();
      }
    }

    // debug mode to print all WebSocket traffic
    if (this.debugMode) {
      Utils.debugWebSocket(this.ws);
    }
  }

  async waitForReady() {
    const timeoutSeconds = 60;
    const successful = await waitFor({
      condition: () => this.connectionDetails !== undefined,
      interval: 100,
      times: (timeoutSeconds * 1000) / 100,
    });
    if (!successful) {
      throw new Error(
        `Have been Waiting for ${timeoutSeconds} seconds but haven't received "ConnectionDetails" message.`
      );
    }
  }

  async revoke() {
    for (const subscription of this.subscriptions) {
      await subscription.revoke();
    }
    if (this.ws.OPEN) {
      this.ws.close();
    }
  }

  async subscribe(eventFilters: string[], callback: (event: {}) => void) {
    await this.waitForReady();
    const subscription = new Subscription(this, eventFilters, callback);
    await subscription.subscribe();
    this.subscriptions.push(subscription);
    return subscription;
  }
}

export default WebSocketExtension;
