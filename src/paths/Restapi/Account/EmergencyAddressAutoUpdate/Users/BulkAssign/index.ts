import { BulkAssignAutomaticaLocationUpdatesUsers } from '../../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../../..'

class BulkAssign {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/bulk-assign`
  }

  /**
   * Operation: Enable Automatic Location Updates for Users
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/users/bulk-assign
   */
  async post (bulkAssignAutomaticaLocationUpdatesUsers: BulkAssignAutomaticaLocationUpdatesUsers): Promise<string> {
    return this.rc.post(this.path(), bulkAssignAutomaticaLocationUpdatesUsers)
  }
}

export default BulkAssign
