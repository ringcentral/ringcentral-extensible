import type { WsgError, WsgEvent, WsgMeta } from "../types";
import Utils from "../utils";

class ConnectionException extends Error {
  public wsgEvent: WsgEvent;

  public wsgError: WsgError;

  public constructor(wsgEvent: WsgEvent) {
    const [, wsgError]: [WsgMeta, WsgError] = Utils.splitWsgData(wsgEvent.data);
    super(JSON.stringify(wsgError, null, 2));
    this.wsgEvent = wsgEvent;
    this.wsgError = wsgError;
  }
}

export default ConnectionException;
