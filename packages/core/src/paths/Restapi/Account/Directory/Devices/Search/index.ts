import DevicesPaginationResource from '../../../../../../definitions/DevicesPaginationResource';
import DevicesSearch from '../../../../../../definitions/DevicesSearch';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/search`;
  }

  /**
   * Returns a list of devices by requested search.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/directory/devices/search
   * Rate Limit Group: Heavy
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async post(devicesSearch: DevicesSearch, restRequestConfig?: RestRequestConfig): Promise<DevicesPaginationResource> {
    const r = await this.rc.post<DevicesPaginationResource>(this.path(), devicesSearch, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
