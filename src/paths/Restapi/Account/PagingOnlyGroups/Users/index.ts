import { PagingOnlyGroupUsers, ListPagingGroupUsersParameters } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Users {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/users`
  }

  /**
   * Operation: Get Paging Group Users
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/users
   */
  async get (queryParams?: ListPagingGroupUsersParameters): Promise<PagingOnlyGroupUsers> {
    const r = await this.rc.get(this.path(), queryParams)
    return r.data
  }
}

export default Users
