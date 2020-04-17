import MakeCallOutRequest from '../../../../../definitions/MakeCallOutRequest'
import CallSession from '../../../../../definitions/CallSession'
import Parent from '..'
import RestClient from '../../../../..'

class CallOut {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/call-out`
  }

  /**
   * Operation: Make CallOut
   * Http post /restapi/v1.0/account/{accountId}/telephony/call-out
   */
  async post(makeCallOutRequest: MakeCallOutRequest): Promise<CallSession> {
    return this.rc.post(this.path(), makeCallOutRequest)
  }
}

export default CallOut
