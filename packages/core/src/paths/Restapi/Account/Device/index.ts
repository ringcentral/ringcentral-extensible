import Emergency from "./Emergency/index.js";
import SipInfo from "./SipInfo/index.js";
import UpdateDeviceParameters from "../../../../definitions/UpdateDeviceParameters.js";
import AccountDeviceUpdate from "../../../../definitions/AccountDeviceUpdate.js";
import DeviceResource from "../../../../definitions/DeviceResource.js";
import ReadDeviceParameters from "../../../../definitions/ReadDeviceParameters.js";
import {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../types.js";

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
      return `${this._parent.path()}/device/${this.deviceId}`;
    }
    return `${this._parent.path()}/device`;
  }
  /**
   * Returns account device(s) by their ID(s).
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/device/{deviceId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyDevices
   */
  public async get(
    queryParams?: ReadDeviceParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<DeviceResource> {
    if (this.deviceId === null) {
      throw new Error("deviceId must be specified.");
    }
    const r = await this.rc.get<DeviceResource>(
      this.path(),
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  /**
   * Updates account device(s) by their ID(s).
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/device/{deviceId}
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyDevices
   */
  public async put(
    accountDeviceUpdate: AccountDeviceUpdate,
    queryParams?: UpdateDeviceParameters,
    restRequestConfig?: RestRequestConfig,
  ): Promise<DeviceResource> {
    if (this.deviceId === null) {
      throw new Error("deviceId must be specified.");
    }
    const r = await this.rc.put<DeviceResource>(
      this.path(),
      accountDeviceUpdate,
      queryParams,
      restRequestConfig,
    );
    return r.data;
  }

  public sipInfo(): SipInfo {
    return new SipInfo(this);
  }

  public emergency(): Emergency {
    return new Emergency(this);
  }
}
export default Index;
