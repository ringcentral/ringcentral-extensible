import Parent from '..'
import RestClient from '../../../../..'

class Unread {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/unread`
  }

  /**
   * Operation: Mark Chat as Unread
   * Http post /restapi/v1.0/glip/chats/{chatId}/unread
   */
  async post(): Promise<string> {
    return this.rc.post(this.path())
  }
}

export default Unread
