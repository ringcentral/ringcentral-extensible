import DeviceResource from '../../../../../definitions/DeviceResource';
import AccountDeviceUpdate from '../../../../../definitions/AccountDeviceUpdate';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/emergency`;
  }

  /**
   * Updates account device emergency information.
   * HTTP Method: put
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/device/{deviceId}/emergency
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: EditCompanyDevices
   */
  async put(accountDeviceUpdate: AccountDeviceUpdate, restRequestConfig?: RestRequestConfig): Promise<DeviceResource> {
    const r = await this.rc.put<DeviceResource>(this.path(), accountDeviceUpdate, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
