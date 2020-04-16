import ListPagingGroupUsersParameters from '../../../../../definitions/ListPagingGroupUsersParameters'
import PagingOnlyGroupUsers from '../../../../../definitions/PagingOnlyGroupUsers'
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
    return `${this.parent.path()}/users`
  }

  /**
   * Operation: Get Paging Group Users
   * Http get /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/users
   */
  async get(queryParams?: ListPagingGroupUsersParameters): Promise<PagingOnlyGroupUsers> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
