import {RestRequestConfig} from '../../../../../Rest';
import {
  CreateMultipleWirelessPointsResponse,
  CreateMultipleWirelessPointsRequest,
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
    return `${this.parent.path()}/wireless-points-bulk-create`;
  }

  /**
   * Operation: Create Multiple Wireless Points
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-create
   */
  async post(
    createMultipleWirelessPointsRequest: CreateMultipleWirelessPointsRequest,
    config?: RestRequestConfig
  ): Promise<CreateMultipleWirelessPointsResponse> {
    const r = await this.rc.post<CreateMultipleWirelessPointsResponse>(
      this.path(),
      createMultipleWirelessPointsRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
