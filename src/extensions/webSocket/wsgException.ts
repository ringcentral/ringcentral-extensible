import {WsgEvent, WsgError, WsgMeta} from './types';
import Utils from './utils';

class WsgException extends Error {
  wsgEvent: WsgEvent;
  wsgError: WsgError;
  constructor(wsgEvent: WsgEvent) {
    const [, wsgError]: [WsgMeta, WsgError] = Utils.splitWsgData(wsgEvent.data);
    super(JSON.stringify(wsgError, null, 2));
    this.wsgEvent = wsgEvent;
    this.wsgError = wsgError;
  }
}

export default WsgException;
