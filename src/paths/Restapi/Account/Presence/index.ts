import { AccountPresenceInfo, ReadAccountPresenceParameters } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Presence {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/presence`
  }

  /**
   * Operation: Get User Presence Status List
   * Http get /restapi/v1.0/account/{accountId}/presence
   */
  async get (queryParams?: ReadAccountPresenceParameters): Promise<AccountPresenceInfo> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Presence
