import SiteMembersBulkUpdate from '../../../../../definitions/SiteMembersBulkUpdate';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/bulk-assign`;
  }

  /**
   * Assigns multiple sites to an account specified in path.
 *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/sites/{siteId}/bulk-assign
   * Rate Limit Group: Medium
   * App Permission: EditExtensions
   * User Permission: Sites
   */
  async post(siteMembersBulkUpdate: SiteMembersBulkUpdate, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), siteMembersBulkUpdate, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
