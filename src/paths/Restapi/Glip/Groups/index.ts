import BulkAssign from './BulkAssign'
import Webhooks from './Webhooks'
import Events from './Events'
import Posts from './Posts'
import GlipCreateGroup from '../../../../definitions/GlipCreateGroup'
import GlipGroupInfo from '../../../../definitions/GlipGroupInfo'
import ListGlipGroupsParameters from '../../../../definitions/ListGlipGroupsParameters'
import GlipGroupList from '../../../../definitions/GlipGroupList'
import Parent from '..'
import RestClient from '../../../..'

class Groups {
  rc: RestClient
  groupId: string
  parent: Parent

  constructor(parent: Parent, groupId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.groupId = groupId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.groupId !== null) {
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
    if (this.groupId === undefined || this.groupId === null) {
      throw new Error("groupId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }

  posts(postId: string = null): Posts {
    return new Posts(this, postId)
  }

  events(): Events {
    return new Events(this)
  }

  webhooks(): Webhooks {
    return new Webhooks(this)
  }

  bulkAssign(): BulkAssign {
    return new BulkAssign(this)
  }
}

export default Groups
