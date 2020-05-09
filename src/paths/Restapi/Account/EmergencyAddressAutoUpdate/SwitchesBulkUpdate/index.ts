import {
  UpdateMultipleSwitchesResponse,
  UpdateMultipleSwitchesRequest,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class SwitchesBulkUpdate {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/switches-bulk-update`;
  }

  /**
   * Operation: Update Multiple Switches
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-update
   */
  async post(
    updateMultipleSwitchesRequest: UpdateMultipleSwitchesRequest
  ): Promise<UpdateMultipleSwitchesResponse> {
    const r = await this.rc.post<UpdateMultipleSwitchesResponse>(
      this.path(),
      updateMultipleSwitchesRequest
    );
    return r.data;
  }
}

export default SwitchesBulkUpdate;
