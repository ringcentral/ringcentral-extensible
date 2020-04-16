import Parent from '..'
import RestClient from '../../../../..'

class Index {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/read`
  }

  /**
   * Operation: Mark Chat as Read
   * Http post /restapi/v1.0/glip/chats/{chatId}/read
   */
  async post(): Promise<string> {
    return this.rc.post(this.path())
  }
}

export default Index
