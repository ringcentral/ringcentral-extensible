import { RestRequestConfig } from '../../../../Rest';
import { ParsePhoneNumberRequest, ParsePhoneNumberParameters, ParsePhoneNumberResponse } from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
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
   * Returns one or more parsed and/or formatted phone numbers that are passed as a string.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/number-parser/parse
   * Rate Limit Group: Light
   */
  async post(parsePhoneNumberRequest: ParsePhoneNumberRequest, queryParams?: ParsePhoneNumberParameters, restRequestConfig?: RestRequestConfig): Promise<ParsePhoneNumberResponse> {
    const r = await this.rc.post<ParsePhoneNumberResponse>(this.path(), parsePhoneNumberRequest, queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
