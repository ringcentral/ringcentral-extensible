import {RestRequestConfig} from '../../../../Rest';
import {
  GlipConversationsList,
  ListGlipConversationsParameters,
  GlipConversationInfo,
  CreateGlipConversationRequest,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Conversations {
  rc: RingCentral;
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
    queryParams?: ListGlipConversationsParameters,
    config?: RestRequestConfig
  ): Promise<GlipConversationsList> {
    const r = await this.rc.get<GlipConversationsList>(
      this.path(false),
      queryParams,
      config
    );
    return r.data;
  }

  /**
   * Operation: Create/Open Conversation
   * Rate Limit Group: Medium
   * Http post /restapi/v1.0/glip/conversations
   */
  async post(
    createGlipConversationRequest: CreateGlipConversationRequest,
    config?: RestRequestConfig
  ): Promise<GlipConversationInfo> {
    const r = await this.rc.post<GlipConversationInfo>(
      this.path(false),
      createGlipConversationRequest,
      undefined,
      config
    );
    return r.data;
  }

  /**
   * Operation: Get Conversation
   * Rate Limit Group: Light
   * Http get /restapi/v1.0/glip/conversations/{chatId}
   */
  async get(config?: RestRequestConfig): Promise<GlipConversationInfo> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.');
    }

    const r = await this.rc.get<GlipConversationInfo>(
      this.path(),
      undefined,
      config
    );
    return r.data;
  }
}

export default Conversations;
