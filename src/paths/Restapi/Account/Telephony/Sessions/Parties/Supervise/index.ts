import PartySuperviseRequest from '../../../../../../../definitions/PartySuperviseRequest'
import PartySuperviseResponse from '../../../../../../../definitions/PartySuperviseResponse'
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
    return `${this.parent.path()}/supervise`
  }

  /**
   * Operation: Supervise Call Party
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/supervise
   */
  async post(PartySuperviseRequest partySuperviseRequest): Promise<PartySuperviseResponse> {
    return this.rc.post(this.path(), partySuperviseRequest)
  }
}

export default Index
