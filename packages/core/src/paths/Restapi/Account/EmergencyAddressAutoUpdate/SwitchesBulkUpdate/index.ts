import UpdateMultipleSwitchesResponse from '../../../../../definitions/UpdateMultipleSwitchesResponse';
import UpdateMultipleSwitchesRequest from '../../../../../definitions/UpdateMultipleSwitchesRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/switches-bulk-update`;
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
  async post(updateMultipleSwitchesRequest: UpdateMultipleSwitchesRequest, restRequestConfig?: RestRequestConfig): Promise<UpdateMultipleSwitchesResponse> {
    const r = await this.rc.post<UpdateMultipleSwitchesResponse>(this.path(), updateMultipleSwitchesRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
