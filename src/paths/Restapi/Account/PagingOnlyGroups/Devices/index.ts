import { PagingOnlyGroupDevices, ListPagingGroupDevicesParameters } from '../../../../../definitions'
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
   * Operation: Get Paging Group Devices
   * Http get /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/devices
   */
  async get(queryParams?: ListPagingGroupDevicesParameters): Promise<PagingOnlyGroupDevices> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Devices
