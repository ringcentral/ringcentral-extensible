import {RestRequestConfig} from '../../../../../Rest';
import {
  ValidateMultipleSwitchesRequest,
  ValidateMultipleSwitchesResponse,
} from '../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/switches-bulk-validate`;
  }
  /**
   * Validates switches before creation or update. The maximum number of switches per request is 10 000.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches-bulk-validate
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async post(
    validateMultipleSwitchesRequest: ValidateMultipleSwitchesRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<ValidateMultipleSwitchesResponse> {
    const r = await this.rc.post<ValidateMultipleSwitchesResponse>(
      this.path(),
      validateMultipleSwitchesRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
