import ValidateMultipleSwitchesResponse from '../../../../../definitions/ValidateMultipleSwitchesResponse';
import ValidateMultipleSwitchesRequest from '../../../../../definitions/ValidateMultipleSwitchesRequest';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../../types';

class Index {
  public rc: RingCentralInterface;

  public _parent: ParentInterface;

  public constructor(_parent: ParentInterface) {
    this._parent = _parent;
    this.rc = _parent.rc;
  }

  public path(): string {
    return `${this._parent.path()}/switches-bulk-validate`;
  }

  /**
   * Validates switches before creation or update. The maximum number
 * of switches per request is 10 000.
 *
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches-bulk-validate
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  public async post(validateMultipleSwitchesRequest: ValidateMultipleSwitchesRequest, restRequestConfig?: RestRequestConfig): Promise<ValidateMultipleSwitchesResponse> {
    const r = await this.rc.post<ValidateMultipleSwitchesResponse>(this.path(), validateMultipleSwitchesRequest, undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
