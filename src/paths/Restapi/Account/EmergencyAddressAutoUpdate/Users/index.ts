import ListAutomaticLocationUpdatesUsersParameters from '../../../../../definitions/ListAutomaticLocationUpdatesUsersParameters'
import AutomaticLocationUpdatesUserList from '../../../../../definitions/AutomaticLocationUpdatesUserList'
import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
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
}

export default Index
