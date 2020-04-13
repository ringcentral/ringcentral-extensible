import CallPartyFlip from '../../../../../../../definitions/CallPartyFlip'
import Parent from '..'
import RestClient from '../../../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/flip`
  }

  /**
   * Operation: Call Flip on Party
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/flip
   */
  async post(CallPartyFlip callPartyFlip): Promise<string> {
    return this.rc.post(this.path(), callPartyFlip)
  }
}

export default Index
