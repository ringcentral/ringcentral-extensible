// eslint-disable-next-line node/no-unpublished-import
import hyperid from 'hyperid';
// eslint-disable-next-line node/no-unpublished-import
import {getStatusText} from 'http-status-codes';

import WebSocketExtension from '.';
import {RestMethod, RestRequestConfig, RestResponse} from '../../Rest';
import {version} from '../../../package.json';
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
  const messageId = uuid();
  const requestBody = [
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
    requestBody.push(_config.data);
  }
  this.ws.send(JSON.stringify(requestBody));
  const [meta, body] = await Utils.waitForWebSocketMessage(
    this.ws,
    meta => meta.messageId === messageId
  );
  const response: RestResponse = {
    data: body as T,
    status: meta.status,
    statusText: getStatusText(meta.status),
    headers: meta.headers,
    config: _config,
  };
  if (
    meta.type === 'ClientRequest' &&
    meta.status >= 200 &&
    meta.status < 300
  ) {
    return response;
  } else {
    throw new RestException(response);
  }
}
