import {RestRequestConfig} from '../../../../../../Rest';
import {AssignMultipleDevicesAutomaticLocationUpdates} from '../../../../../../definitions';
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
   * Enables or disables Automatic Location Updates feature for the specified common phones.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/devices/bulk-assign
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async post(
    assignMultipleDevicesAutomaticLocationUpdates: AssignMultipleDevicesAutomaticLocationUpdates,
    restRequestConfig?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      assignMultipleDevicesAutomaticLocationUpdates,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
