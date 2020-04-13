import GlipEventCreate from '../../../../../definitions/GlipEventCreate'
import GlipEventInfo from '../../../../../definitions/GlipEventInfo'
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
    return `${this.parent.path()}/events`
  }

  /**
   * Operation: Create Event by Group ID
   * Http post /restapi/v1.0/glip/groups/{groupId}/events
   */
  async post(GlipEventCreate glipEventCreate): Promise<GlipEventInfo> {
    return this.rc.post(this.path(), glipEventCreate)
  }

  /**
   * Operation: Get Group Events
   * Http get /restapi/v1.0/glip/groups/{groupId}/events
   */
  async get(): Promise<GlipEventInfo> {
    return this.rc.get(this.path())
  }
}

export default Index
