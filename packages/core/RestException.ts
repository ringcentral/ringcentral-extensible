import { RestResponse } from './Rest';

import Utils from './Utils';

class RestException extends Error {
  response: RestResponse;

  message: string;

  constructor(r: RestResponse) {
    const message = Utils.formatTraffic(r);
    super(message);
    Object.setPrototypeOf(this, RestException.prototype);
    this.response = r;
    this.message = message;
  }
}

export default RestException;
