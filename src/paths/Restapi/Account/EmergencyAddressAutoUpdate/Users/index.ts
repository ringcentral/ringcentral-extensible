import BulkAssign from './BulkAssign'
import { AutomaticLocationUpdatesUserList, ListAutomaticLocationUpdatesUsersParameters } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Users {
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
   * Operation: Get User List
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/users
   */
  async get(queryParams?: ListAutomaticLocationUpdatesUsersParameters): Promise<AutomaticLocationUpdatesUserList> {
    return this.rc.get(this.path(), queryParams)
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this)
  }
}

export default Users
