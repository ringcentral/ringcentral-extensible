import ListCompanyActiveCallsParameters from '../../../../definitions/ListCompanyActiveCallsParameters'
import CompanyActiveCallsResponse from '../../../../definitions/CompanyActiveCallsResponse'
import Parent from '..'
import RestClient from '../../../..'

class ActiveCalls {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/active-calls`
  }

  /**
   * Operation: Get Company Active Calls
   * Http get /restapi/v1.0/account/{accountId}/active-calls
   */
  async get(queryParams?: ListCompanyActiveCallsParameters): Promise<CompanyActiveCallsResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default ActiveCalls
