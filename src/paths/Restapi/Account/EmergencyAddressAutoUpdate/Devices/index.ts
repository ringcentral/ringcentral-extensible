import BulkAssign from './BulkAssign';
import {RestRequestConfig} from '../../../../../Rest';
import {
  ListDevicesAutomaticLocationUpdates,
  ListDevicesAutomaticLocationUpdatesParameters,
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
    return `${this.parent.path()}/devices`;
  }

  /**
   * Operation: Get Device List
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/devices
   */
  async get(
    queryParams?: ListDevicesAutomaticLocationUpdatesParameters,
    config?: RestRequestConfig
  ): Promise<ListDevicesAutomaticLocationUpdates> {
    const r = await this.rc.get<ListDevicesAutomaticLocationUpdates>(
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

export default Index;
