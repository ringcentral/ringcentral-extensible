import { GlipChatsListWithoutNavigation, ListFavoriteChatsParameters } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Favorites {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/favorites`
  }

  /**
   * Operation: Get Favorite Chats
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/glip/favorites
   */
  async get (queryParams?: ListFavoriteChatsParameters): Promise<GlipChatsListWithoutNavigation> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Favorites
