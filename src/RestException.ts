import {AxiosResponse} from 'axios';

import Utils from './Utils';

class RestException extends Error {
  response: AxiosResponse;
  message: string;
  constructor(r: AxiosResponse) {
    const message = Utils.formatTraffic(r);
    super(message);
    Object.setPrototypeOf(this, RestException.prototype);
    this.response = r;
    this.message = message;
  }
}

export default RestException;
