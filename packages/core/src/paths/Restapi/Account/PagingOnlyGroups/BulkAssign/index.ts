import EditPagingGroupRequest from '../../../../../definitions/EditPagingGroupRequest';
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
   * Adds and/or removes paging group users and devices.
 *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/bulk-assign
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: Groups
   */
  async post(editPagingGroupRequest: EditPagingGroupRequest, restRequestConfig?: RestRequestConfig): Promise<string> {
    const r = await this.rc.post<string>(this.path(), editPagingGroupRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
