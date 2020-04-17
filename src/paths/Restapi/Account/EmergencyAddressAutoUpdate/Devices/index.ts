import BulkAssign from './BulkAssign'
import ListDevicesAutomaticLocationUpdatesParameters from '../../../../../definitions/ListDevicesAutomaticLocationUpdatesParameters'
import ListDevicesAutomaticLocationUpdates from '../../../../../definitions/ListDevicesAutomaticLocationUpdates'
import Parent from '..'
import RestClient from '../../../../..'

class Devices {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/devices`
  }

  /**
   * Operation: Get Device List
   * Http get /restapi/v1.0/account/{accountId}/emergency-address-auto-update/devices
   */
  async get(queryParams?: ListDevicesAutomaticLocationUpdatesParameters): Promise<ListDevicesAutomaticLocationUpdates> {
    return this.rc.get(this.path(), queryParams)
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this)
  }
}

export default Devices
