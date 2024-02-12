import type GetBulkAddTaskResultsV2Response from '../../../../../../definitions/GetBulkAddTaskResultsV2Response';
import type AddPhoneNumbersResponse from '../../../../../../definitions/AddPhoneNumbersResponse';
import type AddPhoneNumbersRequest from '../../../../../../definitions/AddPhoneNumbersRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

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
   * Adds phone numbers to the account Inventory as unassigned. Currently, we support the following values: `Inventory`,
   * `InventoryPartnerBusinessMobileNumber` and `PartnerBusinessMobileNumber`. Later we may support some other values like `ForwardedNumber`, etc.
   *
   * HTTP Method: post
   * Endpoint: /restapi/v2/accounts/{accountId}/phone-numbers/bulk-add
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: EditCompanyPhoneNumbers
   */
  public async post(
    addPhoneNumbersRequest: AddPhoneNumbersRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<AddPhoneNumbersResponse> {
    const r = await this.rc.post<AddPhoneNumbersResponse>(
      this.path(false),
      addPhoneNumbersRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Returns the result of asynchronous operation which adds phone numbers to the account Inventory.
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
