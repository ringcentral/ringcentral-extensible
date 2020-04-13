import CreateGlipConversationRequest from '../../../../definitions/CreateGlipConversationRequest'
import GlipConversationInfo from '../../../../definitions/GlipConversationInfo'
import GlipConversationsList from '../../../../definitions/GlipConversationsList'
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
    if (withParameter && this.chatId != null) {
      return `${this.parent.path()}/conversations/${this.chatId}`
    }

    return `${this.parent.path()}/conversations`
  }

  /**
   * Operation: Get Conversations
   * Http get /restapi/v1.0/glip/conversations
   */
  async list(ListGlipConversationsParameters queryParams = null): Promise<GlipConversationsList> {
    return this.rc.get(this.path(false), queryParams)
  }

  /**
   * Operation: Create/Open Conversation
   * Http post /restapi/v1.0/glip/conversations
   */
  async post(CreateGlipConversationRequest createGlipConversationRequest): Promise<GlipConversationInfo> {
    return this.rc.post(this.path(false), createGlipConversationRequest)
  }

  /**
   * Operation: Get Conversation
   * Http get /restapi/v1.0/glip/conversations/{chatId}
   */
  async get(): Promise<GlipConversationInfo> {
    if (!this.chatId || this.chatId === null) {
      throw new Error("chatId must not be undefined or null")
    }

    return this.rc.get(this.path())
  }
}

export default Index
