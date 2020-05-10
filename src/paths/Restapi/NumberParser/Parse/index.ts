import {RestRequestConfig} from '../../../../Rest';
import {
  ParsePhoneNumberResponse,
  ParsePhoneNumberRequest,
  ParsePhoneNumberParameters,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Parse {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/parse`;
  }

  /**
   * Operation: Parse Phone Number
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/number-parser/parse
   */
  async post(
    parsePhoneNumberRequest: ParsePhoneNumberRequest,
    queryParams?: ParsePhoneNumberParameters,
    config?: RestRequestConfig
  ): Promise<ParsePhoneNumberResponse> {
    const r = await this.rc.post<ParsePhoneNumberResponse>(
      this.path(),
      parsePhoneNumberRequest,
      queryParams,
      config
    );
    return r.data;
  }
}

export default Parse;
