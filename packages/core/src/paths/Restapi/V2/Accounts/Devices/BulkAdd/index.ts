import BulkAddDevicesResponse from "../../../../../../definitions/BulkAddDevicesResponse";
import BulkAddDevicesRequest from "../../../../../../definitions/BulkAddDevicesRequest";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/bulk-add`;
  }
  /**
   * Adds multiple BYOD (customer provided) devices to an account.
   * HTTP Method: post
   * Endpoint: /restapi/v2/accounts/{accountId}/devices/bulk-add
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: AddRemoveDevices
   */
  public async post(
    bulkAddDevicesRequest: BulkAddDevicesRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<BulkAddDevicesResponse> {
    const r = await this.rc.post<BulkAddDevicesResponse>(
      this.path(),
      bulkAddDevicesRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
