import ForwardTarget from '../../../../../../../definitions/ForwardTarget'
import CallParty from '../../../../../../../definitions/CallParty'
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
    return `${this.parent.path()}/forward`
  }

  /**
   * Operation: Forward Call Party
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/forward
   */
  async post(ForwardTarget forwardTarget): Promise<CallParty> {
    return this.rc.post(this.path(), forwardTarget)
  }
}

export default Index
