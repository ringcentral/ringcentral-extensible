import EditPagingGroupRequest from '../../../../../definitions/EditPagingGroupRequest'
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
    return `${this.parent.path()}/bulk-assign`
  }

  /**
   * Operation: Assign Paging Group Users and Devices
   * Http post /restapi/v1.0/account/{accountId}/paging-only-groups/{pagingOnlyGroupId}/bulk-assign
   */
  async post(editPagingGroupRequest: EditPagingGroupRequest): Promise<string> {
    return this.rc.post(this.path(), editPagingGroupRequest)
  }
}

export default Index
