import ListExtensionActiveCallsParameters from '../../../../../definitions/ListExtensionActiveCallsParameters'
import UserActiveCallsResponse from '../../../../../definitions/UserActiveCallsResponse'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
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
   * Operation: Get User Active Calls
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls
   */
  async get(queryParams?: ListExtensionActiveCallsParameters): Promise<UserActiveCallsResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
