import {RestRequestConfig} from '../../../../../../../Rest';
import {ForwardTarget, CallParty} from '../../../../../../../definitions';
import Parent from '..';
import RingCentral from '../../../../../../..';

class Index {
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
   * Forwards a non-answered incoming call to the specified call party. Applicable for a call session in "Setup" or "Proceeding" state.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/forward
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async post(
    forwardTarget: ForwardTarget,
    restRequestConfig?: RestRequestConfig
  ): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(
      this.path(),
      forwardTarget,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
