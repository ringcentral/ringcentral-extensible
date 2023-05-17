import AccountPhoneNumberInfo from '../../../../../../definitions/AccountPhoneNumberInfo';
import ReplacePhoneNumberRequest from '../../../../../../definitions/ReplacePhoneNumberRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/replace`;
  }

  /**
   * Replaces (swaps) phone numbers from inventory to main, company, direct or company fax numbers.
 * Used to replace temporary numbers when porting process is complete.
 *
   * HTTP Method: post
   * Endpoint: /restapi/v2/accounts/{accountId}/phone-numbers/{phoneNumberId}/replace
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyPhoneNumbers
   */
  public async post(replacePhoneNumberRequest: ReplacePhoneNumberRequest, restRequestConfig?: RestRequestConfig): Promise<AccountPhoneNumberInfo> {
    const r = await this.rc.post<AccountPhoneNumberInfo>(this.path(), replacePhoneNumberRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
