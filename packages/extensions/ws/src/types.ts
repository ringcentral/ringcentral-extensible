import RingCentral from '@rc-ex/core';
import { RestMethod, RestRequestConfig, RestResponse } from '@rc-ex/core/lib/types';
import WS from 'isomorphic-ws';

export type WsToken = {
  uri: string;
  ws_access_token: string;
  expires_in: number;
};

export type CheckInterval = (retriesAttempted: number) => number;
export type WebSocketOptions = {
  restOverWebSocket?: boolean;
  debugMode?: boolean;
  autoRecover?: {
    enabled: boolean;
    checkInterval?: CheckInterval;
    pingServerInterval?: number;
  };
  wscToken?: string;
};

export type WsgEvent = {
  data: string;
};

export type Wsc = {
  token: string;
  sequence: number;
};

export type WsgMeta = {
  type:
  | 'ClientRequest'
  | 'ServerNotification'
  | 'Error'
  | 'ConnectionDetails'
  | 'Heartbeat';
  messageId: string;
  status: number;
  headers: {
    [key: string]: string;
  };
  wsc?: Wsc;
};

export type WsgError = {
  errorCode: string;
  message: string;
};

export type ConnectionDetails = {
  creationTime: string;
  maxConnectionsPerSession: number;
  recoveryBufferSize: number;
  recoveryTimeout: number;
  idleTimeout: number;
  absoluteTimeout: number;
  maxActiveRequests: number;
  recoveryState?: 'Successful' | 'Failed';
  recoveryErrorCode?: string;
};

export interface WebSocketExtensionInterface {
  options: WebSocketOptions;
  subscriptions: SubscriptionInterface[];
  ws: WS;
  wsToken?: WsToken;
  rc: RingCentral;
  request<T>(
    method: RestMethod,
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig,
  ): Promise<RestResponse<T>>;
}

export interface SubscriptionInterface {
}
