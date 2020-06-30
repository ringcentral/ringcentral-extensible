import {WsgEvent, WsgError, WsgMeta} from './types';
import WebSocketExtension from '.';

class WsgException extends Error {
  wsgEvent: WsgEvent;
  wsgError: WsgError;
  constructor(wsgEvent: WsgEvent) {
    const [, wsgError]: [WsgMeta, WsgError] = WebSocketExtension.splitWsgData(
      wsgEvent.data
    );
    super(JSON.stringify(wsgError, null, 2));
    this.wsgEvent = wsgEvent;
    this.wsgError = wsgError;
  }
}

export default WsgException;
