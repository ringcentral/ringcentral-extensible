import type SwapDeviceRequest from "../../../../../../../definitions/SwapDeviceRequest";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../../../types";

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
   * Replaces the user device with another device, which is assigned to an extension
   * or is stored in the inventory of the same account.
   * Currently, the following device types can be swapped - `HardPhone` and `OtherPhone`.
   *
   * Please note:
   *
   *  - This method allows replacing a device itself, while a phone number,
   *    a digital Line and an emergency address associated with this device remain unchanged
   *    and will still work together in a chain with the replacement device.
   *  - If a target device is from the inventory, then a source device will be moved
   *    to the inventory, and a target device will be assigned to the current extension.
   *  - If a target device is currently assigned to another extension,
   *    then the devices will be just swapped.
   *
   * HTTP Method: post
   * Endpoint: /restapi/v2/accounts/{accountId}/extensions/{extensionId}/devices/{deviceId}/replace
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditUserDevices
   */
  public async post(
    swapDeviceRequest: SwapDeviceRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      swapDeviceRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
