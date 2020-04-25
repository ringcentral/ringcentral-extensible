import { CallParty, ForwardTarget } from '../../../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../../../..'

class Forward {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/forward`
  }

  /**
   * Operation: Forward Call Party
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/forward
   */
  async post (forwardTarget: ForwardTarget): Promise<CallParty> {
    return this.rc.post(this.path(), forwardTarget)
  }
}

export default Forward
