import Parent from '..'
import RestClient from '../../../../..'

class Unarchive {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/unarchive`
  }

  /**
   * Operation: Unarchive Team
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/teams/{chatId}/unarchive
   */
  async post (): Promise<string> {
    return this.rc.post(this.path())
  }
}

export default Unarchive
