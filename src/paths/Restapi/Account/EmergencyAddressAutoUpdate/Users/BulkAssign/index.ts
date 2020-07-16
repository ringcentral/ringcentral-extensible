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
   * Operation: Enable Automatic Location Updates for Users
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/users/bulk-assign
   */
  async post(
    bulkAssignAutomaticLocationUpdatesUsers: BulkAssignAutomaticLocationUpdatesUsers,
    config?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      bulkAssignAutomaticLocationUpdatesUsers,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
