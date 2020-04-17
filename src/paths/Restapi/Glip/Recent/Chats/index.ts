import ListRecentChatsParameters from '../../../../../definitions/ListRecentChatsParameters'
import GlipChatsListWithoutNavigation from '../../../../../definitions/GlipChatsListWithoutNavigation'
import Parent from '..'
import RestClient from '../../../../..'

class Chats {
  rc: RestClient
  parent: Parent

  constructor(parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path(): string {
    return `${this.parent.path()}/chats`
  }

  /**
   * Operation: Get Recent Chats
   * Http get /restapi/v1.0/glip/recent/chats
   */
  async get(queryParams?: ListRecentChatsParameters): Promise<GlipChatsListWithoutNavigation> {
    return this.rc.get(this.path(), queryParams)
  }
}

export default Chats
