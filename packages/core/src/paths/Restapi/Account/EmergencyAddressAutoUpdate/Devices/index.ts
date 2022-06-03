import BulkAssign from './BulkAssign';
import ListDevicesAutomaticLocationUpdates from '../../../../../definitions/ListDevicesAutomaticLocationUpdates';
import ListDevicesAutomaticLocationUpdatesParameters from '../../../../../definitions/ListDevicesAutomaticLocationUpdatesParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
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
  async get(queryParams?: ListDevicesAutomaticLocationUpdatesParameters, restRequestConfig?: RestRequestConfig): Promise<ListDevicesAutomaticLocationUpdates> {
    const r = await this.rc.get<ListDevicesAutomaticLocationUpdates>(this.path(), queryParams, restRequestConfig);
    return r.data;
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this);
  }
}
export default Index;
