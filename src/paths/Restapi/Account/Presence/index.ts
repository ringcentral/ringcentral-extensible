import AccountPresenceInfo from '../../../../definitions/AccountPresenceInfo'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/presence`
  }

  /**
   * Operation: Get User Presence Status List
   * Http get /restapi/v1.0/account/{accountId}/presence
   */
  async get(ReadAccountPresenceParameters queryParams = null): Promise<AccountPresenceInfo> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
