import Emergency from './Emergency';
import SipInfo from './SipInfo';
import UpdateDeviceParameters from '../../../../definitions/UpdateDeviceParameters';
import AccountDeviceUpdate from '../../../../definitions/AccountDeviceUpdate';
import DeviceResource from '../../../../definitions/DeviceResource';
import ReadDeviceParameters from '../../../../definitions/ReadDeviceParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  deviceId: string | null;

  constructor(parent: ParentInterface, deviceId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.deviceId = deviceId;
  }

  path(withParameter = true): string {
    if (withParameter && this.deviceId !== null) {
      return `${this.parent.path()}/device/${this.deviceId}`;
    }
    return `${this.parent.path()}/device`;
  }

  /**
   * Returns account device(s) by their ID(s).
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/device/{deviceId}
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyDevices
   */
  async get(queryParams?: ReadDeviceParameters, restRequestConfig?: RestRequestConfig): Promise<DeviceResource> {
    if (this.deviceId === null) {
      throw new Error('deviceId must be specified.');
    }
    const r = await this.rc.get<DeviceResource>(this.path(), queryParams, restRequestConfig);
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
  async put(accountDeviceUpdate: AccountDeviceUpdate, queryParams?: UpdateDeviceParameters, restRequestConfig?: RestRequestConfig): Promise<DeviceResource> {
    if (this.deviceId === null) {
      throw new Error('deviceId must be specified.');
    }
    const r = await this.rc.put<DeviceResource>(this.path(), accountDeviceUpdate, queryParams, restRequestConfig);
    return r.data;
  }

  sipInfo(): SipInfo {
    return new SipInfo(this);
  }

  emergency(): Emergency {
    return new Emergency(this);
  }
}
export default Index;
