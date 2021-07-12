import {RestRequestConfig} from '../../../../../../../Rest';
import {CallPartyReply, ReplyParty} from '../../../../../../../definitions';
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
    return `${this.parent.path()}/reply`;
  }
  /**
   * Replies with text/pattern without picking up a call.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reply
   * Rate Limit Group: Light
   * App Permission: CallControl
   */
  async post(
    callPartyReply: CallPartyReply,
    restRequestConfig?: RestRequestConfig
  ): Promise<ReplyParty> {
    const r = await this.rc.post<ReplyParty>(
      this.path(),
      callPartyReply,
      undefined,
      restRequestConfig
    );
    return r.data;
  }
}
export default Index;
