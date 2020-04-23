import Parent from '..'
import RestClient from '../../../../..'

class Favorite {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/favorite`
  }

  /**
   * Operation: Add Chat to Favorites
   * Http post /restapi/v1.0/glip/chats/{chatId}/favorite
   */
  async post (): Promise<string> {
    return this.rc.post(this.path())
  }
}

export default Favorite
