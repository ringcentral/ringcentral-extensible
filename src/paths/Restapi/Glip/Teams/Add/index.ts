import GlipPostMembersListBody from '../../../../../definitions/GlipPostMembersListBody'
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
    return `${this.parent.path()}/add`
  }

  /**
   * Operation: Add Team Members
   * Http post /restapi/v1.0/glip/teams/{chatId}/add
   */
  async post(GlipPostMembersListBody glipPostMembersListBody): Promise<string> {
    return this.rc.post(this.path(), glipPostMembersListBody)
  }
}

export default Index
