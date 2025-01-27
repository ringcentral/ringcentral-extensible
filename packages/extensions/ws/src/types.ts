import type RingCentral from "@rc-ex/core";
import type {
  RestMethod,
  RestRequestConfig,
  RestResponse,
} from "@rc-ex/core/src/types";
import type WS from "isomorphic-ws";

export interface WsToken {
  uri: string;
  ws_access_token: string;
  expires_in: number;
}

export type CheckInterval = (retriesAttempted: number) => number;
export interface WebSocketOptions {
  restOverWebSocket?: boolean;
  debugMode?: boolean;
  autoRecover?: {
    enabled: boolean;
    checkInterval?: CheckInterval;
    pingServerInterval?: number;
  };
  wscToken?: string;
}

export interface WsgEvent {
  data: string;
}

export interface Wsc {
  token: string;
  sequence: number;
}

export interface WsgMeta {
  type:
    | "ClientRequest"
    | "ServerNotification"
    | "Error"
    | "ConnectionDetails"
    | "Heartbeat";
  messageId: string;
  status: number;
  headers: {
    [key: string]: string;
  };
  wsc?: Wsc;
}

export interface WsgError {
  errorCode: string;
  message: string;
}

export interface ConnectionDetails {
  creationTime: string;
  maxConnectionsPerSession: number;
  recoveryBufferSize: number;
  recoveryTimeout: number;
  idleTimeout: number;
  absoluteTimeout: number;
  maxActiveRequests: number;
  recoveryState?: "Successful" | "Failed";
  recoveryErrorCode?: string;
}

export interface WebSocketExtensionInterface {
  options: WebSocketOptions;
  subscription?: SubscriptionInterface;
  ws: WS;
  wsToken?: WsToken;
  rc: RingCentral;
  request: <T>(
    method: RestMethod,
    endpoint: string,
    content?: {},
    queryParams?: {},
    config?: RestRequestConfig,
  ) => Promise<RestResponse<T>>;
}

export interface SubscriptionInterface {
  eventFilters: string[];
}
