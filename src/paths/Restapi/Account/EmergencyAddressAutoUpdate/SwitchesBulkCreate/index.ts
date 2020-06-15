import {RestRequestConfig} from '../../../../../Rest';
import {
  CreateMultipleSwitchesResponse,
  CreateMultipleSwitchesRequest,
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
   * Operation: Create Multiple Switches
   * Rate Limit Group: Heavy
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/switches-bulk-create
   */
  async post(
    createMultipleSwitchesRequest: CreateMultipleSwitchesRequest,
    config?: RestRequestConfig
  ): Promise<CreateMultipleSwitchesResponse> {
    const r = await this.rc.post<CreateMultipleSwitchesResponse>(
      this.path(),
      createMultipleSwitchesRequest,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
