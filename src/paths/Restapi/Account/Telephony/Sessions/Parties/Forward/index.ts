import {RestRequestConfig} from '../../../../../../../Rest';
import {CallParty, ForwardTarget} from '../../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../../..';

class Forward {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }

  path(): string {
    return `${this.parent.path()}/forward`;
  }

  /**
   * Operation: Forward Call Party
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/forward
   */
  async post(
    forwardTarget: ForwardTarget,
    config?: RestRequestConfig
  ): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(
      this.path(),
      forwardTarget,
      undefined,
      config
    );
    return r.data;
  }
}

export default Forward;
