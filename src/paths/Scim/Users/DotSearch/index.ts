import { UserSearchResponse, SearchRequest } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class DotSearch {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/.search`
  }

  /**
   * Operation: Search/List Users
   * Http post /scim/v2/Users/.search
   */
  async post(searchRequest: SearchRequest): Promise<UserSearchResponse> {
    return this.rc.post(this.path(), searchRequest)
  }
}

export default DotSearch
