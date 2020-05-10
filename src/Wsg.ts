import WS from 'ws';
import delay from 'delay';
import {Method, AxiosResponse, AxiosRequestConfig} from 'axios';
import hyperid from 'hyperid';
import {getStatusText} from 'http-status-codes';

import RingCentral from '.';
import {RestRequestConfig} from './Rest';
import RestException from './RestException';
import {version} from '../package.json';

const uuid = hyperid();

export type WsgOptions = {
  server: string;
};
export type WsgEvent = {
  data: string;
};

/*
{
  "type": "ClientRequest",
  "messageId": "04fc1c70-9258-11ea-b861-db9249523354",
  "status": 200,
  "headers": {
    "Server": "nginx",
    "Date": "Sun, 10 May 2020 00:48:52 GMT",
    "Content-Type": "application/json;charset=UTF-8",
    "LocalHostInfo": "10.28.28.27__17169@sjc11-c01-csg02.devtest.ringcentral.com",
    "X-Rate-Limit-Group": "medium",
    "X-Rate-Limit-Limit": "100",
    "X-Rate-Limit-Remaining": "98",
    "X-Rate-Limit-Window": "60",
    "RoutingKey": "SJC11P01",
    "RCRequestId": "e7e62e26-c356-4930-8833-7d7ac4f78b0c-56481120-0"
  }
}
*/
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
    while (!this.opened) {
      await delay(100);
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
      const [meta, body]: [WsgMeta, {subscriptionId: string}] = JSON.parse(
        event.data
      );
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
    const _config: AxiosRequestConfig = {
      method: httpMethod,
      url: endpoint,
      data: content,
      params: queryParams,
      ...config,
    };
    _config.headers = {
      ..._config.headers,
      'X-User-Agent': `${this.rc.rest.appName}/${this.rc.rest.appVersion} tylerlong/ringcentral-typescript/${version}`,
    };
    if (endpoint.startsWith('/restapi/oauth/')) {
      throw new Error(
        'Authorization via wss is not supported. Do it via https instead'
      );
    } else {
      _config.headers = {
        ..._config.headers,
        Authorization: `Bearer ${this.rc.token?.access_token}`,
      };
    }
    // const r = await this.httpClient.request<T>(_config);
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
        },
      ];
      if (_config.data) {
        body.push(_config.data);
      }
      this.ws.send(JSON.stringify(body));
      const handler = (event: WsgEvent) => {
        const [meta, body]: [WsgMeta, T] = JSON.parse(event.data);
        if (meta.messageId === messageId && meta.type === 'ClientRequest') {
          this.ws.removeEventListener('message', handler);
          if (meta.status >= 200 && meta.status < 300) {
            resolve({
              data: body,
              status: meta.status,
              statusText: getStatusText(meta.status),
              headers: meta.headers,
              config: _config,
            });
            //   resolve({
            //     data: body,
            //     status: meta.status,
            //     headers: meta.headers,
            //     config: _config,
            //   });
          } else {
            //   reject(
            //     new RestException({
            //       data: body,
            //       status: meta.status,
            //       headers: meta.headers,
            //       config: _config,
            //     })
            //   );
          }
        }
      };
      this.ws.addEventListener('message', handler);
    });

    // if (r.status >= 200 && r.status < 300) {
    //   return r;
    // } else {
    //   throw new RestException(r);
    // }
  }
}
