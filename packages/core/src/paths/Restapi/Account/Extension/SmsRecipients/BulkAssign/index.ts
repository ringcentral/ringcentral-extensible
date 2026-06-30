import type BulkAssignSmsRecipientsRequest from "../../../../../../definitions/BulkAssignSmsRecipientsRequest.js";
import type {
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
    return `${this._parent.path()}/bulk-assign`;
  }
  /**
   * Updates the list of SMS recipients for a given extension.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/extension/{extensionId}/sms-recipients/bulk-assign
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   */
  public async post(
    bulkAssignSmsRecipientsRequest: BulkAssignSmsRecipientsRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      bulkAssignSmsRecipientsRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
