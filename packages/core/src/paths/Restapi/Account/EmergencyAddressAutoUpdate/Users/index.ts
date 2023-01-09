import BulkAssign from './BulkAssign';
import AutomaticLocationUpdatesUserList from '../../../../../definitions/AutomaticLocationUpdatesUserList';
import ListAutomaticLocationUpdatesUsersParameters from '../../../../../definitions/ListAutomaticLocationUpdatesUsersParameters';
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
   * Returns a list of users with their status of Automatic Location
 * Updates feature.
 *
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/users
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async get(queryParams?: ListAutomaticLocationUpdatesUsersParameters, restRequestConfig?: RestRequestConfig): Promise<AutomaticLocationUpdatesUserList> {
    const r = await this.rc.get<AutomaticLocationUpdatesUserList>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}
export default Index;
