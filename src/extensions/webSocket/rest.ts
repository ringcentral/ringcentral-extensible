// eslint-disable-next-line node/no-unpublished-import
import hyperid from 'hyperid';
// eslint-disable-next-line node/no-unpublished-import
import {getStatusText} from 'http-status-codes';

import WebSocketExtension from '.';
import {RestMethod, RestRequestConfig, RestResponse} from '../../Rest';
import {version} from '../../../package.json';
import {WsgEvent, WsgMeta} from './types';
import Utils from './utils';
import RestException from '../../RestException';

const uuid = hyperid();

export async function request<T>(
  this: WebSocketExtension,
  method: RestMethod,
  endpoint: string,
  content?: {},
  queryParams?: {},
  config?: RestRequestConfig
): Promise<RestResponse<T>> {
  await this.waitForReady();
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
      const [meta, body]: [WsgMeta, T] = Utils.splitWsgData(event.data);
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
