import BulkAssign from './BulkAssign';
import {RestRequestConfig} from '../../../../../Rest';
import {
  AutomaticLocationUpdatesUserList,
  ListAutomaticLocationUpdatesUsersParameters,
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
   * Operation: Get User List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/users
   */
  async get(
    queryParams?: ListAutomaticLocationUpdatesUsersParameters,
    config?: RestRequestConfig
  ): Promise<AutomaticLocationUpdatesUserList> {
    const r = await this.rc.get<AutomaticLocationUpdatesUserList>(
      this.path(),
      queryParams,
      config
    );
    return r.data;
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}

export default Users;
