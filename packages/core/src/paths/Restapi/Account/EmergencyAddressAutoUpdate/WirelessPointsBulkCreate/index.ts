import type CreateMultipleWirelessPointsResponse from "../../../../../definitions/CreateMultipleWirelessPointsResponse";
import type CreateMultipleWirelessPointsRequest from "../../../../../definitions/CreateMultipleWirelessPointsRequest";
import type {
  ParentInterface,
  RestRequestConfig,
  RingCentralInterface,
} from "../../../../../types";

class Index {
  public rc: RingCentralInterface;
  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }
  public path(): string {
    return `${this._parent.path()}/wireless-points-bulk-create`;
  }
  /**
   * Creates multiple wireless points in a corporate map. The maximum
   * number of wireless points per request is 10 000; limitation for account is
   * 70 000.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/wireless-points-bulk-create
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async post(
    createMultipleWirelessPointsRequest: CreateMultipleWirelessPointsRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CreateMultipleWirelessPointsResponse> {
    const r = await this.rc.post<CreateMultipleWirelessPointsResponse>(
      this.path(),
      createMultipleWirelessPointsRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
