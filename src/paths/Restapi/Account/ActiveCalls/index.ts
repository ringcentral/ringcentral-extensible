import { CompanyActiveCallsResponse, ListCompanyActiveCallsParameters } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class ActiveCalls {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/active-calls`
  }

  /**
   * Operation: Get Company Active Calls
   * Rate Limit Group: Heavy
   * Http get /restapi/v1.0/account/{accountId}/active-calls
   */
  async get (queryParams?: ListCompanyActiveCallsParameters): Promise<CompanyActiveCallsResponse> {
    const r = await this.rc.get(this.path(), queryParams)
    return r.data
  }
}

export default ActiveCalls
