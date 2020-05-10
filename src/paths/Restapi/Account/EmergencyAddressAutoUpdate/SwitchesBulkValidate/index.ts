import {RestRequestConfig} from '../../../../../Rest';
import {
  ValidateMultipleSwitchesResponse,
  ValidateMultipleSwitchesRequest,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class SwitchesBulkValidate {
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
   * Operation: Validate Multiple Switches
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-validate
   */
  async post(
    validateMultipleSwitchesRequest: ValidateMultipleSwitchesRequest,
    config?: RestRequestConfig
  ): Promise<ValidateMultipleSwitchesResponse> {
    const r = await this.rc.post<ValidateMultipleSwitchesResponse>(
      this.path(),
      validateMultipleSwitchesRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default SwitchesBulkValidate;
