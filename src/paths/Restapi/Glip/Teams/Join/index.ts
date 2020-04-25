import Parent from '..'
import RestClient from '../../../../..'

class Join {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/join`
  }

  /**
   * Operation: Join Team
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/teams/{chatId}/join
   */
  async post (): Promise<string> {
    return this.rc.post(this.path())
  }
}

export default Join
