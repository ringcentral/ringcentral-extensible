import Parent from '..'
import RestClient from '../../../../..'

class Unfavorite {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/unfavorite`
  }

  /**
   * Operation: Remove Chat from Favorites
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/chats/{chatId}/unfavorite
   */
  async post (): Promise<string> {
    return this.rc.post(this.path())
  }
}

export default Unfavorite
