import {ReplyParty, CallPartyReply} from '../../../../../../../definitions';
import Parent from '..';
import RestClient from '../../../../../../..';

class Reply {
  rc: RestClient;
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
  async post(callPartyReply: CallPartyReply): Promise<ReplyParty> {
    const r = await this.rc.post(this.path(), callPartyReply);
    return r.data;
  }
}

export default Reply;
