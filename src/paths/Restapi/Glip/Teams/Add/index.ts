import { GlipPostMembersListBody } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Add {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/add`
  }

  /**
   * Operation: Add Team Members
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/teams/{chatId}/add
   */
  async post (glipPostMembersListBody: GlipPostMembersListBody): Promise<string> {
    return this.rc.post(this.path(), glipPostMembersListBody)
  }
}

export default Add
