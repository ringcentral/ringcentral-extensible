import { GlipChatsListWithoutNavigation, ListRecentChatsParameters } from '../../../../../definitions'
import Parent from '..'
import RestClient from '../../../../..'

class Chats {
  rc: RestClient
  parent: Parent

  constructor (parent: Parent) {
    this.parent = parent
    this.rc = parent.rc
  }

  path (): string {
    return `${this.parent.path()}/chats`
  }

  /**
   * Operation: Get Recent Chats
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/glip/recent/chats
   */
  async get (queryParams?: ListRecentChatsParameters): Promise<GlipChatsListWithoutNavigation> {
    const r = await this.rc.get(this.path(), queryParams)
    return r.data
  }
}

export default Chats
