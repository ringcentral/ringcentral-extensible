import { ReplyParty, CallPartyReply } from '../../../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../../../..'

class Reply {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/reply`
  }

  /**
   * Operation: Reply with Text
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reply
   */
  async post (callPartyReply: CallPartyReply): Promise<ReplyParty> {
    return this.rc.post(this.path(), callPartyReply)
  }
}

export default Reply
