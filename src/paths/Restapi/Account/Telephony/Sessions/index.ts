import Supervise from './Supervise'
import Parties from './Parties'
import ReadCallSessionStatusParameters from '../../../../../definitions/ReadCallSessionStatusParameters'
import CallSession from '../../../../../definitions/CallSession'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  telephonySessionId: string
  parent: Parent

  constructor(parent: Parent, telephonySessionId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.telephonySessionId = telephonySessionId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.telephonySessionId !== null) {
      return `${this.parent.path()}/sessions/${this.telephonySessionId}`
    }

    return `${this.parent.path()}/sessions`
  }

  /**
   * Operation: Get Call Session Status
   * Http get /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}
   */
  async get(queryParams?: ReadCallSessionStatusParameters): Promise<CallSession> {
    if (this.telephonySessionId === undefined || this.telephonySessionId === null) {
      throw new Error("telephonySessionId must not be undefined or null")
    }

    return this.rc.get(this.path(), queryParams)
  }

  /**
   * Operation: Drop Call Session
   * Http delete /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}
   */
  async delete(): Promise<string> {
    if (this.telephonySessionId === undefined || this.telephonySessionId === null) {
      throw new Error("telephonySessionId must not be undefined or null")
    }

    return this.rc.delete(this.path())
  }

  parties(partyId: string = null): Parties {
    return new Parties(this, partyId)
  }

  supervise(): Supervise {
    return new Supervise(this)
  }
}

export default Index
