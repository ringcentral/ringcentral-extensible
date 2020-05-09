import {BulkAssignAutomaticaLocationUpdatesUsers} from '../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../..';

class BulkAssign {
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
   * Operation: Enable Automatic Location Updates for Users
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/users/bulk-assign
   */
  async post(
    bulkAssignAutomaticaLocationUpdatesUsers: BulkAssignAutomaticaLocationUpdatesUsers
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      bulkAssignAutomaticaLocationUpdatesUsers
    );
    return r.data;
  }
}

export default BulkAssign;
