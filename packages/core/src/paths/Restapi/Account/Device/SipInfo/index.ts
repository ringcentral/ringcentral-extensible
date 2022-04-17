import { RestRequestConfig } from '../../../../../Rest';
import { SipInfoResource } from '../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/sip-info`;
  }

  /**
   * Get Device SIP Info
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/device/{deviceId}/sip-info
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyDevices
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<SipInfoResource> {
    const r = await this.rc.get<SipInfoResource>(
      this.path(),
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
