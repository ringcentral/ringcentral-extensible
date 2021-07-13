import BulkAssign from './BulkAssign';
import {RestRequestConfig} from '../../../../../Rest';
import {
  ListDevicesAutomaticLocationUpdatesParameters,
  ListDevicesAutomaticLocationUpdates,
} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

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
   * Returns the list of common devices with their status of Automatic Location Updates feature.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/devices
   * Rate Limit Group: Medium
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async get(
    queryParams?: ListDevicesAutomaticLocationUpdatesParameters,
    restRequestConfig?: RestRequestConfig
  ): Promise<ListDevicesAutomaticLocationUpdates> {
    const r = await this.rc.get<ListDevicesAutomaticLocationUpdates>(
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
