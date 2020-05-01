import {
  GlipConversationsList,
  ListGlipConversationsParameters,
  GlipConversationInfo,
  CreateGlipConversationRequest,
} from '../../../../definitions';
import Parent from '..';
import RestClient from '../../../..';

class Conversations {
  rc: RestClient;
  chatId: string | null;
  parent: Parent;

  constructor(parent: Parent, chatId: string | null = null) {
    this.parent = parent;
    this.rc = parent.rc;
    this.chatId = chatId;
  }

  path(withParameter = true): string {
    if (withParameter && this.chatId !== null) {
      return `${this.parent.path()}/conversations/${this.chatId}`;
    }

    return `${this.parent.path()}/conversations`;
  }

  /**
   * Operation: Get Conversations
   * Rate Limit Group: Medium
   * Http get /restapi/v1.0/glip/conversations
   */
  async list(
    queryParams?: ListGlipConversationsParameters
  ): Promise<GlipConversationsList> {
    const r = await this.rc.get(this.path(false), queryParams);
    return r.data;
  }

  /**
   * Operation: Create/Open Conversation
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/conversations
   */
  async post(
    createGlipConversationRequest: CreateGlipConversationRequest
  ): Promise<GlipConversationInfo> {
    const r = await this.rc.post(
      this.path(false),
      createGlipConversationRequest
    );
    return r.data;
  }

  /**
   * Operation: Get Conversation
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/glip/conversations/{chatId}
   */
  async get(): Promise<GlipConversationInfo> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.');
    }

    const r = await this.rc.get(this.path());
    return r.data;
  }
}

export default Conversations;
