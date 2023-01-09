import DeviceTypesResource from '../../../../../definitions/DeviceTypesResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/device-types`;
  }

  /**
   * Returns all the (distinct) type IDs of devices for particular account
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/directory/device-types
   * Rate Limit Group: Heavy
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<DeviceTypesResource> {
    const r = await this.rc.get<DeviceTypesResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
