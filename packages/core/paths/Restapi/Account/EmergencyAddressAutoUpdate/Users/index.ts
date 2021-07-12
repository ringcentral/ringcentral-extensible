import BulkAssign from './BulkAssign';
import {RestRequestConfig} from '../../../../../Rest';
import {
  ListAutomaticLocationUpdatesUsersParameters,
  AutomaticLocationUpdatesUserList,
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
   * Returns the list of users with their status of Automatic Location Updates feature.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/users
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async get(
    queryParams?: ListAutomaticLocationUpdatesUsersParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<AutomaticLocationUpdatesUserList> {
    const r = await this.rc.get<AutomaticLocationUpdatesUserList>(
      this.path(),
      queryParams,
      restRequestConfig
    );
    return r.data;
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}
export default Index;
