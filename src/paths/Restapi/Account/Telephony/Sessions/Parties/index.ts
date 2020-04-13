import PartyUpdateRequest from '../../../../../../definitions/PartyUpdateRequest'
import CallParty from '../../../../../../definitions/CallParty'
import Parent from '..'
import RestClient from '../../../../../..'

class Index {
  rc: RestClient
  partyId: string
  parent: Parent

  constructor(parent: Parent, partyId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.partyId = partyId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.partyId != null) {
      return `${this.parent.path()}/parties/${this.partyId}`
    }

    return `${this.parent.path()}/parties`
  }

  /**
   * Operation: Get Call Party Status
   * Http get /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}
   */
  async get(): Promise<CallParty> {
    if (!this.partyId || this.partyId === null) {
      throw new Error("partyId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  /**
   * Operation: Update Call Party
   * Http patch /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}
   */
  async patch(PartyUpdateRequest partyUpdateRequest): Promise<CallParty> {
    if (!this.partyId || this.partyId === null) {
      throw new Error("partyId must not be undefined or null")
    }

    return this.rc.patch(this.path(), partyUpdateRequest)
  }
}

export default Index
