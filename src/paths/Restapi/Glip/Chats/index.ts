import GlipChatInfo from '../../../../definitions/GlipChatInfo'
import ListGlipChatsParameters from '../../../../definitions/ListGlipChatsParameters'
import GlipChatsList from '../../../../definitions/GlipChatsList'
import Parent from '..'
import RestClient from '../../../..'

class Index {
  rc: RestClient
  chatId: string
  parent: Parent

  constructor(parent: Parent, chatId: string = null) {
    this.parent = parent
    this.rc = parent.rc
    this.chatId = chatId
  }

  path(withParameter: boolean = true): string {
    if (withParameter && this.chatId !== null) {
      return `${this.parent.path()}/chats/${this.chatId}`
    }

    return `${this.parent.path()}/chats`
  }

  /**
   * Operation: Get Chats
   * Http get /restapi/v1.0/glip/chats
   */
  async list(queryParams?: ListGlipChatsParameters): Promise<GlipChatsList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Get Chat
   * Http get /restapi/v1.0/glip/chats/{chatId}
   */
  async get(): Promise<GlipChatInfo> {
    if (this.chatId === undefined || this.chatId === null) {
      throw new Error("chatId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
