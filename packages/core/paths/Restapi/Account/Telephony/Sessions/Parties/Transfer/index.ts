import {RestRequestConfig} from '../../../../../../../Rest';
import {TransferTarget, CallParty} from '../../../../../../../definitions';
import Parent from '..';
import {RingCentral} from '../../../../../../..';

class Index {
  rc: RingCentral;
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
    this.rc = parent.rc;
  }
  path(): string {
    return `${this.parent.path()}/transfer`;
  }
  /**
   * Transfers an answered call to the specified call party. Applicable for a call session in "Answered" or "Hold" state.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/transfer
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async post(
    transferTarget: TransferTarget,
    restRequestConfig?: RestRequestConfig
  ): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(
      this.path(),
      transferTarget,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
