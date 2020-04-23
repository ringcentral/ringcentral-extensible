import Parent from '..'
import RestClient from '../../../../..'

class Leave {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/leave`
  }

  /**
   * Operation: Leave Team
   * Http post /restapi/v1.0/glip/teams/{chatId}/leave
   */
  async post (): Promise<string> {
    return this.rc.post(this.path())
  }
}

export default Leave
