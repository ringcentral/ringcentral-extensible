import { GlipConversationsList, ListGlipConversationsParameters, GlipConversationInfo, CreateGlipConversationRequest } from '../../../../definitions'
import Parent from '..'
import RestClient from '../../../..'

class Conversations {
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
      return `${this.parent.path()}/conversations/${this.chatId}`
    }

    return `${this.parent.path()}/conversations`
  }

  /**
   * Operation: Get Conversations
   * Http get /restapi/v1.0/glip/conversations
   */
  async list(queryParams?: ListGlipConversationsParameters): Promise<GlipConversationsList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create/Open Conversation
   * Http post /restapi/v1.0/glip/conversations
   */
  async post(createGlipConversationRequest: CreateGlipConversationRequest): Promise<GlipConversationInfo> {
    return this.rc.post(this.path(false), createGlipConversationRequest)
  }

  /**
   * Operation: Get Conversation
   * Http get /restapi/v1.0/glip/conversations/{chatId}
   */
  async get(): Promise<GlipConversationInfo> {
    if (this.chatId === undefined || this.chatId === null) {
      throw new Error("chatId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Conversations
