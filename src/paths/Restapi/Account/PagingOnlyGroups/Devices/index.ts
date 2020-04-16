import ListPagingGroupDevicesParameters from '../../../../../definitions/ListPagingGroupDevicesParameters'
import PagingOnlyGroupDevices from '../../../../../definitions/PagingOnlyGroupDevices'
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

export default Index
