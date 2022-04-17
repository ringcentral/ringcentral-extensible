import { WsgEvent, WsgError, WsgMeta } from './types';
import Utils from './utils';

export class ConnectionException extends Error {
  wsgEvent: WsgEvent;

  wsgError: WsgError;

  constructor(wsgEvent: WsgEvent) {
    const [, wsgError]: [WsgMeta, WsgError] = Utils.splitWsgData(wsgEvent.data);
    super(JSON.stringify(wsgError, null, 2));
    this.wsgEvent = wsgEvent;
    this.wsgError = wsgError;
  }
}

export class TimeoutException extends Error {
  constructor(message?: string) {
    super(message ?? 'Failed to receive expected WebSocket message in time.');
  }
}

export class ClosedException extends Error {
  constructor(message?: string) {
    super(message ?? 'WebSocket has been closed');
  }
}
