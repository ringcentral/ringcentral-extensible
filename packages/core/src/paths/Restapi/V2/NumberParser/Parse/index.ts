import ParsePhoneNumberResponseV2 from "../../../../../definitions/ParsePhoneNumberResponseV2.js";
import ParsePhoneNumbersRequest from "../../../../../definitions/ParsePhoneNumbersRequest.js";
import {
  RingCentralInterface,
  ParentInterface,
  RestRequestConfig,
} from "../../../../../types.js";

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
   * Parses, formats, and validates phone numbers provided as a list of strings.
   * HTTP Method: post
   * Endpoint: /restapi/v2/number-parser/parse
   * Rate Limit Group: Light
   */
  public async post(
    parsePhoneNumbersRequest: ParsePhoneNumbersRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ParsePhoneNumberResponseV2> {
    const r = await this.rc.post<ParsePhoneNumberResponseV2>(
      this.path(),
      parsePhoneNumbersRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
