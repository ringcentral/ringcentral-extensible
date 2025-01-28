import CreateMultipleSwitchesResponse from "../../../../../definitions/CreateMultipleSwitchesResponse";
import CreateMultipleSwitchesRequest from "../../../../../definitions/CreateMultipleSwitchesRequest";
import {
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
    return `${this._parent.path()}/switches-bulk-create`;
  }
  /**
   * Creates multiple switches in corporate map. The maximum number
   * of switches per request is 10 000; limitation for account is 10 000.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches-bulk-create
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async post(
    createMultipleSwitchesRequest: CreateMultipleSwitchesRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<CreateMultipleSwitchesResponse> {
    const r = await this.rc.post<CreateMultipleSwitchesResponse>(
      this.path(),
      createMultipleSwitchesRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
