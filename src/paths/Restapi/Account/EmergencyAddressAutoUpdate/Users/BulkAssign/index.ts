import BulkAssignAutomaticaLocationUpdatesUsers from '../../../../../../definitions/BulkAssignAutomaticaLocationUpdatesUsers'
import Parent from '..'
import RestClient from '../../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  Index(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  string path() {
    return `${this.parent.path()}/bulk-assign`
  }

  /**
   * Operation: Enable Automatic Location Updates for Users
   * Http post /restapi/v1.0/account/{accountId}/emergency-address-auto-update/users/bulk-assign
   */
  async post(BulkAssignAutomaticaLocationUpdatesUsers bulkAssignAutomaticaLocationUpdatesUsers): Promise<string> {
    return this.rc.post(this.path(), bulkAssignAutomaticaLocationUpdatesUsers)
  }
}

export default Index
