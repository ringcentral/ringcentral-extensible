import PagingOnlyGroupUsers from '../../../../../definitions/PagingOnlyGroupUsers';
import ListPagingGroupUsersParameters from '../../../../../definitions/ListPagingGroupUsersParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/users`;
  }

  /**
   * Returns the list of users allowed to page this group.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/users
   * Rate Limit Group: Light
   * App Permission: ReadAccounts
   * User Permission: ReadUserInfo
   */
  async get(queryParams?: ListPagingGroupUsersParameters, restRequestConfig?: RestRequestConfig): Promise<PagingOnlyGroupUsers> {
    const r = await this.rc.get<PagingOnlyGroupUsers>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }
}
export default Index;
