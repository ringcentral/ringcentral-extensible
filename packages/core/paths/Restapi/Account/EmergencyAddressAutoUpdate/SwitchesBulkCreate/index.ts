import {RestRequestConfig} from '../../../../../Rest';
import {
  CreateMultipleSwitchesRequest,
  CreateMultipleSwitchesResponse,
} from '../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/switches-bulk-create`;
  }
  /**
   * Creates multiple switches in corporate map. The maximum number of switches per request is 10 000; limitation for account is 10 000.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/emergency-address-auto-update/switches-bulk-create
   * Rate Limit Group: Heavy
   * App Permission: EditAccounts
   * User Permission: ConfigureEmergencyMaps
   */
  async post(
    createMultipleSwitchesRequest: CreateMultipleSwitchesRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<CreateMultipleSwitchesResponse> {
    const r = await this.rc.post<CreateMultipleSwitchesResponse>(
      this.path(),
      createMultipleSwitchesRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
