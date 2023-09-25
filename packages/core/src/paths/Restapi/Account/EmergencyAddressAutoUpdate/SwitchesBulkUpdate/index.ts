import type UpdateMultipleSwitchesResponse from '../../../../../definitions/UpdateMultipleSwitchesResponse';
import type UpdateMultipleSwitchesRequest from '../../../../../definitions/UpdateMultipleSwitchesRequest';
import type { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/switches-bulk-update`;
  }

  /**
   * Updates multiple switches in corporate map. The maximum number
   * of switches per request is 10 000; limitation for account is 10 000.
   *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches-bulk-update
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async post(
    updateMultipleSwitchesRequest: UpdateMultipleSwitchesRequest,
    restRequestConfig?: RestRequestConfig,
  ): Promise<UpdateMultipleSwitchesResponse> {
    const r = await this.rc.post<UpdateMultipleSwitchesResponse>(
      this.path(),
      updateMultipleSwitchesRequest,
      undefined,
      restRequestConfig,
    );
    return r.data;
  }
}
export default Index;
