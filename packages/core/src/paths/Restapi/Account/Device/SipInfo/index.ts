import SipInfoResource from '../../../../../definitions/SipInfoResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/sip-info`;
  }

  /**
   * Returns device SIP information.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/device/{deviceId}/sip-info
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyDevices
   */
  public async get(restRequestConfig?: RestRequestConfig): Promise<SipInfoResource> {
    const r = await this.rc.get<SipInfoResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
