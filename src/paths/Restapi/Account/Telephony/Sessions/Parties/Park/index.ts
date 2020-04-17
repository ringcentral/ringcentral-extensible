import { CallParty } from '../../../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../../../..'

class Park {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/park`
  }

  /**
   * Operation: Call Park
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/park
   */
  async post(): Promise<CallParty> {
    return this.rc.post(this.path())
  }
}

export default Park
