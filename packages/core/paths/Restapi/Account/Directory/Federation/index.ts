import {RestRequestConfig} from '../../../../../Rest';
import {FederationResource} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
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
  async get(
    restRequestConfig?: RestRequestConfig
  ): Promise<FederationResource> {
    const r = await this.rc.get<FederationResource>(
      this.path(),
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
