import CallFlipNumbers from "./CallFlipNumbers/index.js";
import CommHandling from "./CommHandling/index.js";
import Devices from "./Devices/index.js";
import BulkDeleteUsersResponse from "../../../../../definitions/BulkDeleteUsersResponse.js";
import BulkDeleteUsersRequest from "../../../../../definitions/BulkDeleteUsersRequest.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/extensions`;
  }
  /**
   * Deletes extension(s) of User and Limited types, and depending on device type either keeps or destroys
   * the assets - numbers and devices. If a device is rented or bought in RC, it will be moved to the inventory.
   * A BYOD (Other Phone) device will be deleted. Multiple extensions can be deleted by a single API call.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: Users
   */
  public async delete(
    bulkDeleteUsersRequest: BulkDeleteUsersRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<BulkDeleteUsersResponse> {
    const r = await this.rc.delete<BulkDeleteUsersResponse>(
      this.path(),
      bulkDeleteUsersRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public devices(deviceId: string | null = null): Devices {
    return new Devices(this, deviceId);
  }

  public commHandling(): CommHandling {
    return new CommHandling(this);
  }

  public callFlipNumbers(): CallFlipNumbers {
    return new CallFlipNumbers(this);
  }
}
export default Index;
