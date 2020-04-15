import GlipCreateGroup from '../../../../definitions/GlipCreateGroup'
import GlipGroupInfo from '../../../../definitions/GlipGroupInfo'
import ListGlipGroupsParameters from '../../../../definitions/ListGlipGroupsParameters'
import GlipGroupList from '../../../../definitions/GlipGroupList'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  groupId: string
  parent: Parent

  constructor(parent: Parent, groupId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.groupId = groupId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.groupId != null) {
      return `${this.parent.path()}/groups/${this.groupId}`
    }

    return `${this.parent.path()}/groups`
  }

  /**
   * Operation: Get User Groups
   * Http get /restapi/v1.0/glip/groups
   */
  async list(queryParams?: ListGlipGroupsParameters): Promise<GlipGroupList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Group
   * Http post /restapi/v1.0/glip/groups
   */
  async post(glipCreateGroup: GlipCreateGroup): Promise<GlipGroupInfo> {
    return this.rc.post(this.path(false), glipCreateGroup)
  }

  /**
   * Operation: Get Group
   * Http get /restapi/v1.0/glip/groups/{groupId}
   */
  async get(): Promise<GlipGroupInfo> {
    if (!this.groupId || this.groupId === null) {
      throw new Error("groupId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
