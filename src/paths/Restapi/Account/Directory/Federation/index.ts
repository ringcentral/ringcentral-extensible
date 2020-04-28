import { FederationResource } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Federation {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/federation`
  }

  /**
   * Operation: Get Account Federation
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/account/{accountId}/directory/federation
   */
  async get (): Promise<FederationResource> {
    const r = await this.rc.get(this.path())
    return r.data
  }
}

export default Federation
