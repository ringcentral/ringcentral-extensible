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
   * Operation: Enable Automatic Location Updates for Devices
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/devices/bulk-assign
   */
  async post(
    assignMultipleDevicesAutomaticLocationUpdates: AssignMultipleDevicesAutomaticLocationUpdates,
    config?: RestRequestConfig
  ): Promise<string> {
    const r = await this.rc.post<string>(
      this.path(),
      assignMultipleDevicesAutomaticLocationUpdates,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
