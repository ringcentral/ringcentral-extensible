import ListCompanyActiveCallsParameters from '../../../../definitions/ListCompanyActiveCallsParameters'
import CompanyActiveCallsResponse from '../../../../definitions/CompanyActiveCallsResponse'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
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

export default Index
