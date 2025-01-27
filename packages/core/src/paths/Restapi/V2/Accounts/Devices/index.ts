import BulkAdd from "./BulkAdd/index.js";
import RemoveLineResponse from "../../../../../definitions/RemoveLineResponse.js";
import RemoveLineRequest from "../../../../../definitions/RemoveLineRequest.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types.js";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;
  public deviceId: string | null;

  public constructor(_parent: ParentInterface, deviceId: string | null = null) {
    this._parent = _parent;
    this.rc = _parent.rc;
    this.deviceId = deviceId;
  }
  public path(withParameter = true): string {
    if (withParameter && this.deviceId !== null) {
      return `${this._parent.path()}/devices/${this.deviceId}`;
    }
    return `${this._parent.path()}/devices`;
  }
  /**
   * Disassociates a phone line (DL & Device) from an extension:
   *
   *  - if the value of `keepAssetsInInventory` is `true`,
   * the given device is moved to unassigned devices and the number is moved to the number inventory;
   *  - if the value of `keepAssetsInInventory` is `false`, the given device and number is removed from the account;
   *  - if the parameter `keepAssetsInInventory` is not set (empty body), default value `true` is set.
   *
   * HTTP Method: delete
   * Endpoint: /restapi/v2/accounts/{accountId}/devices/{deviceId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditAccountDevices
   */
  public async delete(
    removeLineRequest: RemoveLineRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<RemoveLineResponse> {
    if (this.deviceId === null) {
      throw new Error("deviceId must be specified.");
    }
    const r = await this.rc.delete<RemoveLineResponse>(
      this.path(),
      removeLineRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }

  public bulkAdd(): BulkAdd {
    return new BulkAdd(this);
  }
}
export default Index;
