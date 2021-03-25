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
  };
};

export type WsgEvent = {
  data: string;
};

export type Wsc = {
  token: string;
  sequence: number;
};

export type WsgMeta = {
  type: 'ClientRequest' | 'ServerNotification' | 'Error' | 'ConnectionDetails';
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
  recoveryState?: 'Successful' | 'Failed';
  recoveryErrorCode?: string;
};
