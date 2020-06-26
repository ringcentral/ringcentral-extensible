/* eslint-disable node/no-unpublished-import */
import WS from 'isomorphic-ws';
import waitFor from 'wait-for-async';
import {getStatusText} from 'http-status-codes';
import hyperid from 'hyperid';

import RingCentral from '../..';
import {RestRequestConfig, RestResponse, RestMethod} from '../../Rest';
import SdkExtension from '..';
import RestException from '../../RestException';
import {version} from '../../../package.json';
import {SubscriptionInfo, CreateSubscriptionRequest} from '../../definitions';
import {WsToken} from './types';

const uuid = hyperid();

export type WebSocketOptions = {
  restOverWebSocket?: boolean;
  debugMode?: boolean;
};
export type WsgEvent = {
  data: string;
};
export type WsgMeta = {
  type: 'ClientRequest' | 'ServerNotification' | 'Error';
  messageId: string;
  status: number;
  headers: {
    [key: string]: string;
  };
};

class WebSocketExtension extends SdkExtension {
  static sandboxServer = 'wss://ws-api.devtest.ringcentral.com/ws';
  static productionServer = 'wss://ws-api.ringcentral.com/ws';

  rc!: RingCentral;
  wsToken!: WsToken;
  ws!: WS;
  opened = false;

  restOverWebsocket: boolean;
  debugMode: boolean;
  subscriptions: Subscription[] = [];

  constructor(options?: WebSocketOptions) {
    super();
    this.restOverWebsocket = options?.restOverWebSocket ?? false;
    this.debugMode = options?.debugMode ?? false;
  }

  install(rc: RingCentral): void {
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
        endpoint.startsWith('/restapi/oauth/')
      ) {
        return request<T>(method, endpoint, content, queryParams, config);
      }
      return this.request<T>(method, endpoint, content, queryParams, config);
    };
    this.connect();
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

  async connect() {
    const r = await this.rc.post('/restapi/oauth/wstoken');
    this.wsToken = r.data as WsToken;
    this.ws = new WS(
      this.wsToken.uri + '?access_token=' + this.wsToken.ws_access_token
    );
    const openHandler = () => {
      this.opened = true;
      this.ws.removeEventListener('open', openHandler);
    };
    this.ws.addEventListener('open', openHandler);
    if (this.debugMode) {
      const send = this.ws.send.bind(this.ws);
      this.ws.send = (str: string) => {
        send(str);
        console.debug(
          `*** WebSocket outgoing message: ***
${JSON.stringify(JSON.parse(str), null, 2)}
******`
        );
      };
      this.ws.addEventListener('message', (event: WsgEvent) => {
        console.debug(
          `*** WebSocket incoming message: ***
${JSON.stringify(JSON.parse(event.data), null, 2)}
******`
        );
      });
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static splitWsgData(wsgData: string): [WsgMeta, any] {
    if (wsgData.includes(',--Boundary')) {
      const index = wsgData.indexOf(',--Boundary');
      return [
        JSON.parse(wsgData.substring(1, index)),
        wsgData.substring(index + 1, wsgData.length - 1),
      ];
    } else {
      return JSON.parse(wsgData);
    }
  }

  async waitForOpen() {
    const timeoutSeconds = 60;
    const successful = await waitFor({
      condition: () => this.opened,
      interval: 100,
      times: (timeoutSeconds * 1000) / 100,
    });
    if (!successful) {
      throw new Error(
        `Have been Waiting for ${timeoutSeconds} seconds but WebSocket is not open.`
      );
    }
  }

  async revoke() {
    for (const subscription of this.subscriptions) {
      await subscription.revoke();
    }
    this.ws.close();
  }

  async subscribe(eventFilters: string[], callback: (event: {}) => void) {
    await this.waitForOpen();
    const subscription = new Subscription(this, eventFilters, callback);
    await subscription.subscribe();
    this.subscriptions.push(subscription);
    return subscription;
  }

  async request<T>(
    method: RestMethod,
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig
  ): Promise<RestResponse<T>> {
    await this.waitForOpen();
    const _config: RestRequestConfig = {
      method: method,
      baseURL: this.wsToken.uri,
      url: endpoint,
      data: content,
      params: queryParams,
      ...config,
    };
    _config.headers = {
      ..._config.headers,
      'X-User-Agent': `${this.rc.rest!.appName}/${
        this.rc.rest!.appVersion
      } ringcentral/ringcentral-extensible/${version} via wss`,
    };
    return new Promise((resolve, reject) => {
      const messageId = uuid();
      const body = [
        {
          type: 'ClientRequest',
          messageId,
          method: _config.method,
          path: _config.url,
          headers: _config.headers,
          query: _config.params,
        },
      ];
      if (_config.data) {
        body.push(_config.data);
      }
      this.ws.send(JSON.stringify(body));
      const handler = (event: WsgEvent) => {
        const [meta, body]: [WsgMeta, T] = WebSocketExtension.splitWsgData(
          event.data
        );
        if (meta.messageId === messageId) {
          this.ws.removeEventListener('message', handler);
          const response: RestResponse = {
            data: body,
            status: meta.status,
            statusText: getStatusText(meta.status),
            headers: meta.headers,
            config: _config,
          };
          if (meta.type === 'Error') {
            reject(new RestException(response));
          } else if (meta.type === 'ClientRequest') {
            if (meta.status >= 200 && meta.status < 300) {
              resolve(response);
            } else {
              reject(new RestException(response));
            }
          }
        }
      };
      this.ws.addEventListener('message', handler);
    });
  }
}

class Subscription {
  wse: WebSocketExtension;
  eventFilters: string[];
  eventListener: (event: WsgEvent) => void;
  timeout?: NodeJS.Timeout;
  enabled = true;

  constructor(
    wse: WebSocketExtension,
    eventFilters: string[],
    callback: (event: {}) => void
  ) {
    this.wse = wse;
    this.eventFilters = eventFilters;
    this.eventListener = (event: WsgEvent) => {
      const [meta, body]: [
        WsgMeta,
        {subscriptionId: string}
      ] = WebSocketExtension.splitWsgData(event.data);
      if (
        this.enabled &&
        meta.type === 'ServerNotification' &&
        body.subscriptionId === this.subscriptionInfo!.id
      ) {
        callback(body);
      }
    };
    this.wse.ws.addEventListener('message', this.eventListener);
  }

  get requestBody(): CreateSubscriptionRequest {
    return {
      deliveryMode: {transportType: 'WebSocket'},
      eventFilters: this.eventFilters,
    };
  }

  _subscriptionInfo?: SubscriptionInfo;
  get subscriptionInfo(): SubscriptionInfo | undefined {
    return this._subscriptionInfo;
  }
  set subscriptionInfo(_subscription) {
    this._subscriptionInfo = _subscription;
    if (this.timeout) {
      global.clearTimeout(this.timeout);
      this.timeout = undefined;
    }
    if (_subscription) {
      this.timeout = global.setTimeout(() => {
        this.refresh();
      }, ((_subscription.expiresIn ?? 900) - 120) * 1000);
    }
  }

  async subscribe() {
    this.subscriptionInfo = (
      await this.wse.request<SubscriptionInfo>(
        'POST',
        '/restapi/v1.0/subscription',
        this.requestBody
      )
    ).data;
  }

  async refresh() {
    if (!this.subscriptionInfo) {
      return;
    }
    try {
      this.subscriptionInfo = (
        await this.wse.request<SubscriptionInfo>(
          'PUT',
          `/restapi/v1.0/subscription/${this.subscriptionInfo!.id}`,
          this.requestBody
        )
      ).data;
    } catch (e) {
      if (e.response && e.response.status === 404) {
        // subscription expired
        await this.subscribe();
      }
    }
  }

  async revoke() {
    if (!this.subscriptionInfo) {
      return;
    }
    if (this.timeout) {
      global.clearTimeout(this.timeout);
      this.timeout = undefined;
    }
    await this.wse.request<SubscriptionInfo>(
      'DELETE',
      `/restapi/v1.0/subscription/${this.subscriptionInfo!.id}`
    );
    this.subscriptionInfo = undefined;
    this.wse.ws.removeEventListener('message', this.eventListener);
    const index = this.wse.subscriptions.indexOf(this);
    if (index !== -1) {
      this.wse.subscriptions.splice(index, 1);
    }
  }
}

export default WebSocketExtension;
