import {RestRequestConfig} from '../../../../../Rest';
import {
  UpdateMultipleWirelessPointsResponse,
  UpdateMultipleWirelessPointsRequest,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class WirelessPointsBulkUpdate {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/wireless-points-bulk-update`;
  }

  /**
   * Operation: Update Multiple Wireless Points
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-update
   */
  async post(
    updateMultipleWirelessPointsRequest: UpdateMultipleWirelessPointsRequest,
    config?: RestRequestConfig
  ): Promise<UpdateMultipleWirelessPointsResponse> {
    const r = await this.rc.post<UpdateMultipleWirelessPointsResponse>(
      this.path(),
      updateMultipleWirelessPointsRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default WirelessPointsBulkUpdate;
