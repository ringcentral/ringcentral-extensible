import type ValidateMultipleWirelessPointsResponse from '../../../../../definitions/ValidateMultipleWirelessPointsResponse';
import type ValidateMultipleWirelessPointsRequest from '../../../../../definitions/ValidateMultipleWirelessPointsRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/wireless-points-bulk-validate`;
  }
  /**
   * Validates wireless points before creation or update. The maximum
   * number of wireless points per request is 10 000.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-validate
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async post(
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
