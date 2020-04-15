import CallPartyReply from '../../../../../../../definitions/CallPartyReply'
import ReplyParty from '../../../../../../../definitions/ReplyParty'
import Parent from '..'
import RestClient from '../../../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/reply`
  }

  /**
   * Operation: Reply with Text
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reply
   */
  async post(callPartyReply: CallPartyReply): Promise<ReplyParty> {
    return this.rc.post(this.path(), callPartyReply)
  }
}

export default Index
