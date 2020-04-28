import Parent from '..'
import RestClient from '../../../../../../..'

class Reject {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/reject`
  }

  /**
   * Operation: Reject Call Party
   * Rate Limit Group: Light
   * Http post /restapi/v1.0/account/{accountId}/telephony/sessions/{telephonySessionId}/parties/{partyId}/reject
   */
  async post (): Promise<string> {
    const r = await this.rc.post(this.path())
    return r.data
  }
}

export default Reject
