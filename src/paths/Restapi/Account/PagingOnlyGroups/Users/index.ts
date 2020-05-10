import {RestRequestConfig} from '../../../../../Rest';
import {
  PagingOnlyGroupUsers,
  ListPagingGroupUsersParameters,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Users {
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
   * Operation: Get Paging Group Users
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/users
   */
  async get(
    queryParams?: ListPagingGroupUsersParameters,
    config?: RestRequestConfig
  ): Promise<PagingOnlyGroupUsers> {
    const r = await this.rc.get<PagingOnlyGroupUsers>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }
}

export default Users;
