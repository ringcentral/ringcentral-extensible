import ParsePhoneNumberResponse from "../../../../definitions/ParsePhoneNumberResponse.js";
import ParsePhoneNumberParameters from "../../../../definitions/ParsePhoneNumberParameters.js";
import ParsePhoneNumberRequest from "../../../../definitions/ParsePhoneNumberRequest.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/parse`;
  }
  /**
   * Returns one or more parsed and/or formatted phone numbers that are passed as strings.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/number-parser/parse
   * Rate Limit Group: Light
   */
  public async post(
    parsePhoneNumberRequest: ParsePhoneNumberRequest,
    queryParams?: ParsePhoneNumberParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ParsePhoneNumberResponse> {
    const r = await this.rc.post<ParsePhoneNumberResponse>(
      this.path(),
      parsePhoneNumberRequest,
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
