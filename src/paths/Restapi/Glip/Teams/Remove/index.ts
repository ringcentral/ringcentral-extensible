import GlipPostMembersIdsListBody from '../../../../../definitions/GlipPostMembersIdsListBody'
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
    return `${this.parent.path()}/remove`
  }

  /**
   * Operation: Remove Team Members
   * Http post /restapi/v1.0/glip/teams/{chatId}/remove
   */
  async post(GlipPostMembersIdsListBody glipPostMembersIdsListBody): Promise<string> {
    return this.rc.post(this.path(), glipPostMembersIdsListBody)
  }
}

export default Index
