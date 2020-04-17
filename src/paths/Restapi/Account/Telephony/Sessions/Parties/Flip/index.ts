import CallPartyFlip from '../../../../../../../definitions/CallPartyFlip'
import Parent from '..'
import RestClient from '../../../../../../..'

class Flip {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/flip`
  }

  /**
   * Operation: Call Flip on Party
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/flip
   */
  async post(callPartyFlip: CallPartyFlip): Promise<string> {
    return this.rc.post(this.path(), callPartyFlip)
  }
}

export default Flip
