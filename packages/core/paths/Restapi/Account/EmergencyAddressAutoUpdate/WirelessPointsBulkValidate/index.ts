import { RestRequestConfig } from '../../../../../Rest';
import {
  ValidateMultipleWirelessPointsRequest,
  ValidateMultipleWirelessPointsResponse,
} from '../../../../../definitions';
import Parent from '..';
import { RingCentral } from '../../../../..';

class Index {
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
   * Validates wireless points before creation or update. The maximum number of wireless points per request is 10 000.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-validate
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async post(
    validateMultipleWirelessPointsRequest: ValidateMultipleWirelessPointsRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<ValidateMultipleWirelessPointsResponse> {
    const r = await this.rc.post<ValidateMultipleWirelessPointsResponse>(
      this.path(),
      validateMultipleWirelessPointsRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
