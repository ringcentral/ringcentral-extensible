import EditGroupRequest from '../../../../../definitions/EditGroupRequest'
import GlipGroupInfo from '../../../../../definitions/GlipGroupInfo'
import Parent from '..'
import RestClient from '../../../../..'

class BulkAssign {
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
   * Operation: Edit Group Members
   * Http post /restapi/v1.0/glip/groups/{groupId}/bulk-assign
   */
  async post(editGroupRequest: EditGroupRequest): Promise<GlipGroupInfo> {
    return this.rc.post(this.path(), editGroupRequest)
  }
}

export default BulkAssign
