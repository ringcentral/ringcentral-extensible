import {RestRequestConfig} from '../../../../../../../Rest';
import {AddPartyRequest, CallParty} from '../../../../../../../definitions';
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
    return `${this.parent.path()}/bring-in`;
  }
  /**
   * Adds a new party to the call session by bringing-in an established SIP call connection. The maximum number of parties to bring-in is 10; only 1 call party can be added per request. Currently the method is supported for sessions of 'Conference' origin only.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/bring-in
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async post(
    addPartyRequest: AddPartyRequest,
    restRequestConfig?: RestRequestConfig
  ): Promise<CallParty> {
    const r = await this.rc.post<CallParty>(
      this.path(),
      addPartyRequest,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
