import {RestRequestConfig} from '../../../../../Rest';
import {
  ValidateMultipleWirelessPointsResponse,
  ValidateMultipleWirelessPointsRequest,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class WirelessPointsBulkValidate {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/wireless-points-bulk-validate`;
  }

  /**
   * Operation: Validate Multiple Wireless Points
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-validate
   */
  async post(
    validateMultipleWirelessPointsRequest: ValidateMultipleWirelessPointsRequest,
    config?: RestRequestConfig
  ): Promise<ValidateMultipleWirelessPointsResponse> {
    const r = await this.rc.post<ValidateMultipleWirelessPointsResponse>(
      this.path(),
      validateMultipleWirelessPointsRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default WirelessPointsBulkValidate;
