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
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/presence
   */
  async get (queryParams?: ReadAccountPresenceParameters): Promise<AccountPresenceInfo> {
    const r = await this.rc.get(this.path(), queryParams)
    return r.data
  }
}

export default Presence
