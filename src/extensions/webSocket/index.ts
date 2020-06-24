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
import {SubscriptionInfo} from '../../definitions';
import {WsToken} from './types';

const uuid = hyperid();

export type WebSocketOptions = {
  restOverWebSocket?: boolean;
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
  restOverWebsocket: boolean;

  constructor(options?: WebSocketOptions) {
    super();
    this.restOverWebsocket = options?.restOverWebSocket ?? false;
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
  }

  static sandboxServer = 'wss://ws-api.devtest.ringcentral.com/ws';
  static productionServer = 'wss://ws-api.ringcentral.com/ws';

  rc!: RingCentral;
  wsToken!: WsToken;
  ws!: WS;
  opened = false;

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
    // todo: make the following part of debug mode
    this.ws.addEventListener('message', (event: WsgEvent) => {
      console.log(
        '*** WebSocket incoming message: ***\n',
        JSON.stringify(JSON.parse(event.data), null, 2),
        '\n******'
      );
    });
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
    this.ws.close();
  }

  async subscribe(eventFilters: string[], callback: (event: {}) => void) {
    const r = await this.request<SubscriptionInfo>(
      'POST',
      '/restapi/v1.0/subscription',
      {
        eventFilters,
        deliveryMode: {
          transportType: 'WebSocket',
        },
      }
    );
    const subscriptionInfo = r.data;

    const subscriptionId = subscriptionInfo.id;
    this.ws.addEventListener('message', (event: WsgEvent) => {
      const [meta, body]: [
        WsgMeta,
        {subscriptionId: string}
      ] = WebSocketExtension.splitWsgData(event.data);
      if (
        this.enabled &&
        meta.type === 'ServerNotification' &&
        body.subscriptionId === subscriptionId
      ) {
        callback(body);
      }
    });
  }

  async request<T>(
    method: RestMethod,
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig
  ): Promise<RestResponse<T>> {
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
    await this.waitForOpen();
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
      console.log(
        '*** WebSocket outgoing message: ***\n',
        JSON.stringify(body, null, 2),
        '\n******'
      );
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
