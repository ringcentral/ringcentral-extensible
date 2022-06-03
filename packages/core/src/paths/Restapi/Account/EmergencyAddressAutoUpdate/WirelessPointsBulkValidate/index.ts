import ValidateMultipleWirelessPointsResponse from '../../../../../definitions/ValidateMultipleWirelessPointsResponse';
import ValidateMultipleWirelessPointsRequest from '../../../../../definitions/ValidateMultipleWirelessPointsRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
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
  async post(validateMultipleWirelessPointsRequest: ValidateMultipleWirelessPointsRequest, restRequestConfig?: RestRequestConfig): Promise<ValidateMultipleWirelessPointsResponse> {
    const r = await this.rc.post<ValidateMultipleWirelessPointsResponse>(this.path(), validateMultipleWirelessPointsRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
