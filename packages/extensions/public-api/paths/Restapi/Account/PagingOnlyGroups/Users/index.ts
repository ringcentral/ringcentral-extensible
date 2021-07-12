import {RestRequestConfig} from '../../../../../Rest';
import {
  ListPagingGroupUsersParameters,
  PagingOnlyGroupUsers,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
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
  async get(
    queryParams?: ListPagingGroupUsersParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<PagingOnlyGroupUsers> {
    const r = await this.rc.get<PagingOnlyGroupUsers>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }
}

export default Index;
