import PagingOnlyGroupDevices from '../../../../../definitions/PagingOnlyGroupDevices'
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
   * Operation: Get Paging Group Devices
   * Http get /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/devices
   */
  async get(ListPagingGroupDevicesParameters queryParams = null): Promise<PagingOnlyGroupDevices> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Index
