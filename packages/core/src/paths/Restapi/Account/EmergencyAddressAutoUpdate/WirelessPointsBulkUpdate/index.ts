import UpdateMultipleWirelessPointsResponse from '../../../../../definitions/UpdateMultipleWirelessPointsResponse';
import UpdateMultipleWirelessPointsRequest from '../../../../../definitions/UpdateMultipleWirelessPointsRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(withParameter = false): string {
    return `${this._parent.path()}/wireless-points-bulk-update`;
  }

  /**
   * Updates wireless points in corporate map. The maximum number of
 * wireless points per request is 10 000; limitation for account is 70 000.
 *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-update
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async post(updateMultipleWirelessPointsRequest: UpdateMultipleWirelessPointsRequest, restRequestConfig?: RestRequestConfig): Promise<UpdateMultipleWirelessPointsResponse> {
    const r = await this.rc.post<UpdateMultipleWirelessPointsResponse>(this.path(), updateMultipleWirelessPointsRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
