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
import {
  WsToken,
  ConnectionDetail,
  WebSocketOptions,
  WsgEvent,
  WsgMeta,
  ConnectionBody,
} from './types';
import Subscription from './subscription';

const uuid = hyperid();

class WebSocketExtension extends SdkExtension {
  static sandboxServer = 'wss://ws-api.devtest.ringcentral.com/ws';
  static productionServer = 'wss://ws-api.ringcentral.com/ws';

  rc!: RingCentral;
  wsToken!: WsToken;
  ws!: WS;
  connectionDetail?: ConnectionDetail;

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
        endpoint.startsWith('/restapi/oauth/') // token, revoke, wstoken
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
    const connectionDetailListener = (event: WsgEvent) => {
      const [meta, body]: [
        WsgMeta,
        ConnectionBody
      ] = WebSocketExtension.splitWsgData(event.data);
      if (meta.type === 'ConnectionDetails' && meta.wsc) {
        if (
          !this.connectionDetail ||
          (this.connectionDetail &&
            this.connectionDetail.wsc!.sequence < meta.wsc.sequence)
        )
          this.connectionDetail = {...meta, body};
      }
    };
    this.ws.addEventListener('message', connectionDetailListener);
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

  async waitForConnected() {
    const timeoutSeconds = 60;
    const successful = await waitFor({
      condition: () => this.connectionDetail !== undefined,
      interval: 100,
      times: (timeoutSeconds * 1000) / 100,
    });
    if (!successful) {
      throw new Error(
        `Have been Waiting for ${timeoutSeconds} seconds but haven't received "ConnectionDetail" message.`
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
    await this.waitForConnected();
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
    await this.waitForConnected();
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

export default WebSocketExtension;
