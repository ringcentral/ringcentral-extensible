import PartySuperviseRequest from '../../../../../../../definitions/PartySuperviseRequest'
import PartySuperviseResponse from '../../../../../../../definitions/PartySuperviseResponse'
import Parent from '..'
import RestClient from '../../../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/supervise`
  }

  /**
   * Operation: Supervise Call Party
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/supervise
   */
  async post(partySuperviseRequest: PartySuperviseRequest): Promise<PartySuperviseResponse> {
    return this.rc.post(this.path(), partySuperviseRequest)
  }
}

export default Index
