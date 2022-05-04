import { RestRequestConfig } from '../../../../Rest';
import {
  ListGlipConversationsParameters, GlipConversationsList, CreateGlipConversationRequest, GlipConversationInfo,
} from '../../../../definitions';
import Parent from '..';
import RingCentral from '../../../..';

class Index {
  rc: RingCentral;

  parent: Parent;

  chatId: string | null;

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
   * Returns the list of conversations where the user is a member. All records in response are sorted by creation time of a conversation in ascending order. Conversation is a chat of the *Group* type.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/conversations
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async list(queryParams?: ListGlipConversationsParameters, restRequestConfig?: RestRequestConfig): Promise<GlipConversationsList> {
    const r = await this.rc.get<GlipConversationsList>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new conversation or opens the existing one. If the conversation already exists, then its ID will be returned in response. A conversation is an adhoc discussion between a particular set of users, not featuring any specific name or description; it is a chat of 'Group' type. If you add a person to the existing conversation (group), it creates a whole new conversation.
   * HTTP Method: post
   * Endpoint: /restapi/{apiVersion}/glip/conversations
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async post(createGlipConversationRequest: CreateGlipConversationRequest, restRequestConfig?: RestRequestConfig): Promise<GlipConversationInfo> {
    const r = await this.rc.post<GlipConversationInfo>(this.path(false), createGlipConversationRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns information about the specified conversation, including the list of conversation participants. A conversation is an adhoc discussion between a particular set of users, not featuring any specific name or description; it is a chat of 'Group' type. If you add a person to the existing conversation, it creates a whole new conversation.
   * HTTP Method: get
   * Endpoint: /restapi/{apiVersion}/glip/conversations/{chatId}
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   * User Permission: UnifiedAppDesktop
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<GlipConversationInfo> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.');
    }
    const r = await this.rc.get<GlipConversationInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
