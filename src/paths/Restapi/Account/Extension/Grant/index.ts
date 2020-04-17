import { GetExtensionGrantListResponse, ListExtensionGrantsParameters } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Grant {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/grant`
  }

  /**
   * Operation: Get Extension Grant List
   * Http get /restapi/v1.0/account/{accountId}/extension/{extensionId}/grant
   */
  async get(queryParams?: ListExtensionGrantsParameters): Promise<GetExtensionGrantListResponse> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Grant
