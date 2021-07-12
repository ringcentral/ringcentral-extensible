import {RestRequestConfig} from '../../../../../../Rest';
import {BulkAssignAutomaticLocationUpdatesUsers} from '../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/bulk-assign`;
  }
  /**
   * Enables or disables Automatic Location Updates feature for multiple account users.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/users/bulk-assign
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async post(
    bulkAssignAutomaticLocationUpdatesUsers: BulkAssignAutomaticLocationUpdatesUsers,
    restRequestConfig?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      bulkAssignAutomaticLocationUpdatesUsers,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
