import DeviceResource from "../../../../../definitions/DeviceResource.js";
import AccountDeviceUpdate from "../../../../../definitions/AccountDeviceUpdate.js";
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
    return `${this._parent.path()}/emergency`;
  }
  /**
   * Updates account device emergency information.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/device/{deviceId}/emergency
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyDevices
   */
  public async put(
    accountDeviceUpdate: AccountDeviceUpdate,
    restRequestConfig?: RestRequestConfig,
  ): Promise<DeviceResource> {
    const r = await this.rc.put<DeviceResource>(
      this.path(),
      accountDeviceUpdate,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
