import UserActiveCallsResponse from '../../../../../definitions/UserActiveCallsResponse'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/active-calls`
  }

  /**
   * Operation: Get User Active Calls
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/active-calls
   */
  async get(ListExtensionActiveCallsParameters queryParams = null): Promise<UserActiveCallsResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
