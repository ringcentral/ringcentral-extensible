import WS from 'ws';
import {Method, AxiosResponse, AxiosRequestConfig} from 'axios';
import hyperid from 'hyperid';
import {getStatusText} from 'http-status-codes';

import RingCentral from '.';
import {RestRequestConfig} from './Rest';
import RestException from './RestException';
import {version} from '../package.json';
import Utils from './Utils';

const uuid = hyperid();

export type WsgOptions = {
  server: string;
};
export type WsgEvent = {
  data: string;
};
export type WsgMeta = {
  type: 'ClientRequest' | 'ServerNotification';
  messageId: string;
  status: number;
  headers: {
    [key: string]: string;
  };
};

export default class Wsg {
  static sandboxServer = 'wss://ws-api.devtest.ringcentral.com/ws';
  static productionServer = 'wss://ws-api.ringcentral.com/ws';

  rc: RingCentral;
  server: string;
  ws: WS;
  opened = false;

  constructor(rc: RingCentral, options: WsgOptions) {
    this.rc = rc;
    this.server = options.server;
    this.ws = new WS(this.server);
    const openHandler = () => {
      this.opened = true;
      this.ws.removeEventListener('open', openHandler);
    };
    this.ws.addEventListener('open', openHandler);
  }

  async waitForOpen() {
    const waitForSeconds = 60;
    const successful = await Utils.waitUntil(
      100,
      (waitForSeconds * 1000) / 100,
      () => this.opened
    );
    if (!successful) {
      throw new Error(
        `Have been Waiting for ${this.waitForOpen} seconds but WebSocket is not open.`
      );
    }
  }

  revoke() {
    this.ws.close();
  }

  async subscribe(eventFilters: string[], callback: (body: {}) => void) {
    const subscriptionInfo = await this.rc
      .restapi()
      .subscription()
      .post(
        {
          eventFilters,
          deliveryMode: {
            transportType: 'WebSocket',
          },
        },
        {transport: 'wss'}
      );
    const subscriptionId = subscriptionInfo.id;
    this.ws.addEventListener('message', (event: WsgEvent) => {
      const [meta, body]: [
        WsgMeta,
        {subscriptionId: string}
      ] = Utils.splitWsgData(event.data);
      if (
        meta.type === 'ServerNotification' &&
        body.subscriptionId === subscriptionId
      ) {
        callback(body);
      }
    });
  }

  async request<T>(
    httpMethod: Method,
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig
  ): Promise<AxiosResponse<T>> {
    if (config?.headers?.['Content-Type'].includes('multipart/form-data')) {
      throw new Error(
        'Content type "multipart/form-data" via wss is not supported. Do it via https instead.'
      );
    }
    if (config?.responseType === 'arraybuffer') {
      throw new Error(
        'Binary download via wss is not supported. Do it via https instead.'
      );
    }
    const _config: AxiosRequestConfig = {
      method: httpMethod,
      url: endpoint,
      data: content,
      params: queryParams,
      ...config,
    };
    _config.headers = {
      ..._config.headers,
      'X-User-Agent': `${this.rc.rest.appName}/${this.rc.rest.appVersion} ringcentral/ringcentral-unified-ts/${version} via wss`,
    };
    if (endpoint.startsWith('/restapi/oauth/')) {
      throw new Error(
        'Authorization via wss is not supported. Do it via https instead.'
      );
    } else {
      _config.headers = {
        ..._config.headers,
        Authorization: `Bearer ${this.rc.token?.access_token}`,
      };
    }
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
      const handler = (event: WsgEvent) => {
        const [meta, body]: [WsgMeta, T] = Utils.splitWsgData(event.data);
        if (meta.messageId === messageId && meta.type === 'ClientRequest') {
          this.ws.removeEventListener('message', handler);
          const response: AxiosResponse = {
            data: body,
            status: meta.status,
            statusText: getStatusText(meta.status),
            headers: meta.headers,
            config: _config,
          };
          if (meta.status >= 200 && meta.status < 300) {
            resolve(response);
          } else {
            reject(new RestException(response));
          }
        }
      };
      this.ws.addEventListener('message', handler);
    });
  }
}
