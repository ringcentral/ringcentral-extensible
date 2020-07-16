export type WsToken = {
  uri: string;
  ws_access_token: string;
  expires_in: number;
};

export type WebSocketOptions = {
  restOverWebSocket?: boolean;
  debugMode?: boolean;
};

export type WsgEvent = {
  data: string;
};

export type WsgMeta = {
  type: 'ClientRequest' | 'ServerNotification' | 'Error' | 'ConnectionDetails';
  messageId: string;
  status: number;
  headers: {
    [key: string]: string;
  };
  wsc?: {
    token: string;
    sequence: number;
  };
};

export type WsgError = {
  errorCode: string;
  message: string;
};

export type ConnectionBody = {
  creationTime: string;
  maxConnectionsPerSession: number;
  recoveryBufferSize: number;
  recoveryTimeout: number;
  idleTimeout: number;
  absoluteTimeout: number;
  recoveryState?: 'Successful' | 'Failed';
  recoveryErrorCode?: string;
};

export type ConnectionDetails = WsgMeta & {
  body: ConnectionBody;
};
