import SipInfoResource from '../../../../../definitions/SipInfoResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/sip-info`;
  }

  /**
   * Returns device SIP information.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/device/{deviceId}/sip-info
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyDevices
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<SipInfoResource> {
    const r = await this.rc.get<SipInfoResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
