import AddForwardedNumbersResponse from '../../../../../definitions/AddForwardedNumbersResponse';
import AddForwardedNumbersRequest from '../../../../../definitions/AddForwardedNumbersRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/forwarded-numbers`;
  }

  /**
   * Adds forwarded numbers to an account.
 *
 * **Flow #1. For Partners with their own number pool.**
 *
 * Adds forwarded (ported) phone number(s) in provisioned (activated) state,
 * but the Partner is responsible for all further calls on behalf of this number from fraud perspective.
 * If extension is specified in request body then the number will be added
 * at extension level as `ForwardedNumber`. If extension is not specified in request,
 * a number is assigned directly to an account as `ForwardedCompanyNumber`.
 * A forwarded number can be used as an outbound caller ID.
 * Once a number is finally ported it turns into ordinary (not forwarded) account/extension phone number.
 *
 * **Flow #2. For Partners with RingCentral-managed number pool.**
 *
 * Adds forwarded (ported) phone number(s) in non-activated state. A forwarded number should be activated
 * via separated RC support flow.
 * If extension is specified in request body then the number will be added
 * at extension level as `ForwardedNumber`. If extension is not specified in request,
 * a number is assigned directly to an account as `ForwardedCompanyNumber`.
 *
   * HTTP Method: post
   * Endpoint: /restapi/v2/accounts/{accountId}/forwarded-numbers
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: EditCompanyPhoneNumbers
   */
  public async post(addForwardedNumbersRequest: AddForwardedNumbersRequest, restRequestConfig?: RestRequestConfig): Promise<AddForwardedNumbersResponse> {
    const r = await this.rc.post<AddForwardedNumbersResponse>(this.path(), addForwardedNumbersRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
