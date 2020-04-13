import ListDevicesAutomaticLocationUpdates from '../../../../../definitions/ListDevicesAutomaticLocationUpdates'
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
    return `${this.parent.path()}/devices`
  }

  /**
   * Operation: Get Device List
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/devices
   */
  async get(ListDevicesAutomaticLocationUpdatesParameters queryParams = null): Promise<ListDevicesAutomaticLocationUpdates> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
