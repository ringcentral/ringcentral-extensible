import {
  RestMethod,
  RestRequestConfig,
  RestResponse,
} from '@rc-ex/core/lib/Rest';
import RestException from '@rc-ex/core/lib/RestException';
import hyperid from 'hyperid';
import { getReasonPhrase } from 'http-status-codes';

import WebSocketExtension from './index';
import Utils from './utils';

const version = '0.16';

const uuid = hyperid();

export async function request<T>(
  this: WebSocketExtension,
  method: RestMethod,
  endpoint: string,
  content?: {},
  queryParams?: {},
  config?: RestRequestConfig,
): Promise<RestResponse<T>> {
  const newConfig: RestRequestConfig = {
    method,
    baseURL: this.wsToken?.uri,
    url: endpoint,
    data: content,
    params: queryParams,
    ...config,
  };
  newConfig.headers = {
    ...newConfig.headers,
    'X-User-Agent': `${this.rc.rest!.appName}/${this.rc.rest!.appVersion} ringcentral-extensible/ws/${version}`,
  };
  const messageId = uuid();
  const requestBody = [
    {
      type: 'ClientRequest',
      messageId,
      method: newConfig.method,
      path: newConfig.url,
      headers: newConfig.headers,
      query: newConfig.params,
    },
  ];
  if (newConfig.data) {
    requestBody.push(newConfig.data);
  }
  await this.ws.send(JSON.stringify(requestBody));
  const [meta, body] = await Utils.waitForWebSocketMessage(
    this.ws,
    (_meta) => _meta.messageId === messageId,
  );
  const response: RestResponse = {
    data: body as T,
    status: meta.status,
    statusText: getReasonPhrase(meta.status),
    headers: meta.headers,
    config: newConfig,
  };
  if (
    meta.type === 'ClientRequest'
    && meta.status >= 200
    && meta.status < 300
  ) {
    return response;
  }
  throw new RestException(response);
}