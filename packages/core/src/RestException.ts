import type { RestResponse } from './types';
import Utils from './Utils';

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
