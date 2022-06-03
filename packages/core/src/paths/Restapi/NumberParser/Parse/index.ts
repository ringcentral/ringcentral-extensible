import ParsePhoneNumberResponse from '../../../../definitions/ParsePhoneNumberResponse';
import ParsePhoneNumberParameters from '../../../../definitions/ParsePhoneNumberParameters';
import ParsePhoneNumberRequest from '../../../../definitions/ParsePhoneNumberRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
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
