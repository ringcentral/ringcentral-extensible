import SearchRequest from '../../../../definitions/SearchRequest'
import UserSearchResponse from '../../../../definitions/UserSearchResponse'
import Parent from '..'
import RestClient from '../../../..'

class Index {
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

export default Index
