import type { RestResponse } from "./types.js";
import Utils from "./Utils.js";

class RestException extends Error {
  public response: RestResponse;

  public message: string;

  public constructor(r: RestResponse) {
    const message = Utils.formatTraffic(r);
    super(message);
    Object.setPrototypeOf(this, RestException.prototype);
    this.response = r;
    this.message = message;
  }
}

export default RestException;
