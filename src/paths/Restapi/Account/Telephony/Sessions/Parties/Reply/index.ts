import {RestRequestConfig} from '../../../../../../../Rest';
import {ReplyParty, CallPartyReply} from '../../../../../../../definitions';
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
   * Operation: Reply with Text
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reply
   */
  async post(
    callPartyReply: CallPartyReply,
    config?: RestRequestConfig
  ): Promise<ReplyParty> {
    const r = await this.rc.post<ReplyParty>(
      this.path(),
      callPartyReply,
      undefined,
      config
    );
    return r.data;
  }
}

export default Index;
