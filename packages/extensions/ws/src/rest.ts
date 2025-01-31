import type {
  RestMethod,
  RestRequestConfig,
  RestResponse,
} from "@rc-ex/core/types";
import RestException from "@rc-ex/core/RestException";
import hyperid from "hyperid";
import { getReasonPhrase } from "http-status-codes";

import Utils from "./utils.js";
import type { WebSocketExtensionInterface } from "./types.js";

const version = "0.16";

const uuid = hyperid();

export async function request<T>(
  this: WebSocketExtensionInterface,
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
    "X-User-Agent": `${this.rc.rest!.appName}/${
      this.rc.rest!.appVersion
    } ringcentral-extensible/ws/${version}`,
  } as any;
  const messageId = uuid();
  const requestBody = [
    {
      type: "ClientRequest",
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
    config: newConfig as any,
  };
  if (
    meta.type === "ClientRequest" && meta.status >= 200 && meta.status < 300
  ) {
    return response;
  }
  throw new RestException(response);
}
