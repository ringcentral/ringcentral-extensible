import FederationResource from '../../../../../definitions/FederationResource';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/federation`;
  }

  /**
   * Returns information on a federation and associated accounts.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/directory/federation
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadCompanyInfo
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<FederationResource> {
    const r = await this.rc.get<FederationResource>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
