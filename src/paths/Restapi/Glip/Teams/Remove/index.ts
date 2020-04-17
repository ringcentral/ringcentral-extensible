import GlipPostMembersIdsListBody from '../../../../../definitions/GlipPostMembersIdsListBody'
import Parent from '..'
import RestClient from '../../../../..'

class Remove {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/remove`
  }

  /**
   * Operation: Remove Team Members
   * Http post /restapi/v1.0/glip/teams/{chatId}/remove
   */
  async post(glipPostMembersIdsListBody: GlipPostMembersIdsListBody): Promise<string> {
    return this.rc.post(this.path(), glipPostMembersIdsListBody)
  }
}

export default Remove
