import GetBulkAddTaskResultsV2Response from '../../../../../../definitions/GetBulkAddTaskResultsV2Response';
import AddPhoneNumbersResponse from '../../../../../../definitions/AddPhoneNumbersResponse';
import AddPhoneNumbersRequest from '../../../../../../definitions/AddPhoneNumbersRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public taskId: string | null;

  public constructor(_parent: ParentInterface, taskId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.taskId = taskId;
  }

  public path(withParameter = true): string {
    if (withParameter && this.taskId !== null) {
      return `${this._parent.path()}/bulk-add/${this.taskId}`;
    }
    return `${this._parent.path()}/bulk-add`;
  }

  /**
   * Adds phone numbers to the account inventory as unassigned.
 * Only "Inventory" usageType is supported. Later we may support other values like "ForwardedNumber" etc.
 *
   * HTTP Method: post
   * Endpoint: /restapi/v2/accounts/{accountId}/phone-numbers/bulk-add
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: EditCompanyPhoneNumbers
   */
  public async post(addPhoneNumbersRequest: AddPhoneNumbersRequest, restRequestConfig?: RestRequestConfig): Promise<AddPhoneNumbersResponse> {
    const r = await this.rc.post<AddPhoneNumbersResponse>(this.path(false), addPhoneNumbersRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns the result of asynchronous operation which added phone numbers to account inventory.
 *
   * HTTP Method: get
   * Endpoint: /restapi/v2/accounts/{accountId}/phone-numbers/bulk-add/{taskId}
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: EditCompanyPhoneNumbers
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<GetBulkAddTaskResultsV2Response> {
    if (this.taskId === null) {
      throw new Error('taskId must be specified.');
    }
    const r = await this.rc.get<GetBulkAddTaskResultsV2Response>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
