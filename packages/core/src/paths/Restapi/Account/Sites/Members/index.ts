import SiteMembersList from '../../../../../definitions/SiteMembersList';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/members`;
  }

  /**
   * Returns members of a site specified in path.
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/sites/{siteId}/members
   * Rate Limit Group: Medium
   * App Permission: ReadAccounts
   * User Permission: ReadExtensions
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<SiteMembersList> {
    const r = await this.rc.get<SiteMembersList>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
