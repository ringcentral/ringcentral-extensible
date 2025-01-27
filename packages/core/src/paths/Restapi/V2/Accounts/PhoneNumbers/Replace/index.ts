import AccountPhoneNumberInfo from "../../../../../../definitions/AccountPhoneNumberInfo.js";
import ReplacePhoneNumberRequest from "../../../../../../definitions/ReplacePhoneNumberRequest.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/replace`;
  }
  /**
   * Replaces (swaps) phone numbers from inventory with the main, company, direct or company fax numbers.
   * This method is used to replace temporary numbers when the porting process is complete.
   *
   * HTTP Method: post
   * Endpoint: /restapi/v2/accounts/{accountId}/phone-numbers/{phoneNumberId}/replace
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyPhoneNumbers
   */
  public async post(
    replacePhoneNumberRequest: ReplacePhoneNumberRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AccountPhoneNumberInfo> {
    const r = await this.rc.post<AccountPhoneNumberInfo>(
      this.path(),
      replacePhoneNumberRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
