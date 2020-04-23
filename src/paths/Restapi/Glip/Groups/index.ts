import BulkAssign from './BulkAssign'
import Webhooks from './Webhooks'
import Events from './Events'
import Posts from './Posts'
import { GlipGroupList, ListGlipGroupsParameters, GlipGroupInfo, GlipCreateGroup } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Groups {
  rc: RestClient
  groupId: (string | null)
  parent: Parent

  constructor (parent: Parent, groupId: (string | null) = null) {
    this.parent = parent
    this.rc = parent.rc
    this.groupId = groupId
  }

  path (withParameter: boolean = true): string {
    if (withParameter && this.groupId !== null) {
      return `${this.parent.path()}/groups/${this.groupId}`
    }

    return `${this.parent.path()}/groups`
  }

  /**
   * Operation: Get User Groups
   * Http get /restapi/v1.0/glip/groups
   */
  async list (queryParams?: ListGlipGroupsParameters): Promise<GlipGroupList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create Group
   * Http post /restapi/v1.0/glip/groups
   */
  async post (glipCreateGroup: GlipCreateGroup): Promise<GlipGroupInfo> {
    return this.rc.post(this.path(false), glipCreateGroup)
  }

  /**
   * Operation: Get Group
   * Http get /restapi/v1.0/glip/groups/{groupId}
   */
  async get (): Promise<GlipGroupInfo> {
    if (this.groupId === null) {
      throw new Error('groupId must be specified.')
    }

    return this.rc.get(this.path())
  }

  posts (postId: (string | null) = null): Posts {
    return new Posts(this, postId)
  }

  events (): Events {
    return new Events(this)
  }

  webhooks (): Webhooks {
    return new Webhooks(this)
  }

  bulkAssign (): BulkAssign {
    return new BulkAssign(this)
  }
}

export default Groups
