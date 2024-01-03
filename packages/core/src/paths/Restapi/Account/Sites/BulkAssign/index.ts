import type SiteMembersBulkUpdate from '../../../../../definitions/SiteMembersBulkUpdate';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/bulk-assign`;
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
  public async post(
    siteMembersBulkUpdate: SiteMembersBulkUpdate,
    restRequestConfig?: RestRequestConfig,
  ): Promise<string> {
    const r = await this.rc.post<string>(this.path(), siteMembersBulkUpdate, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
