import { GlipEventInfo, GlipEventCreate } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Events {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/events`
  }

  /**
   * Operation: Create Event by Group ID
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/groups/{groupId}/events
   */
  async post (glipEventCreate: GlipEventCreate): Promise<GlipEventInfo> {
    return this.rc.post(this.path(), glipEventCreate)
  }

  /**
   * Operation: Get Group Events
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/groups/{groupId}/events
   */
  async get (): Promise<GlipEventInfo> {
    return this.rc.get(this.path())
  }
}

export default Events
