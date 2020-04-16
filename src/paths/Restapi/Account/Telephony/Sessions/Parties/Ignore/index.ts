import IgnoreRequestBody from '../../../../../../../definitions/IgnoreRequestBody'
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
    return `${this.parent.path()}/ignore`
  }

  /**
   * Operation: Ignore Call in Queue
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/ignore
   */
  async post(ignoreRequestBody: IgnoreRequestBody): Promise<string> {
    return this.rc.post(this.path(), ignoreRequestBody)
  }
}

export default Index
