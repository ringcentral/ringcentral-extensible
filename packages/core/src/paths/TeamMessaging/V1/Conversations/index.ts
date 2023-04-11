import TMConversationInfo from '../../../../definitions/TMConversationInfo';
import CreateConversationRequest from '../../../../definitions/CreateConversationRequest';
import TMConversationList from '../../../../definitions/TMConversationList';
import ListGlipConversationsNewParameters from '../../../../definitions/ListGlipConversationsNewParameters';
import { RingCentralInterface, ParentInterface, RestRequestConfig } from '../../../../types';

class Index {
  rc: RingCentralInterface;

  parent: ParentInterface;

  chatId: string | null;

  constructor(parent: ParentInterface, chatId: string | null = null) {
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
   * Endpoint: /team-messaging/v1/conversations
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async list(queryParams?: ListGlipConversationsNewParameters, restRequestConfig?: RestRequestConfig): Promise<TMConversationList> {
    const r = await this.rc.get<TMConversationList>(this.path(false), queryParams, restRequestConfig);
    return r.data;
  }

  /**
   * Creates a new conversation or opens the existing one. If the conversation already exists, then its ID will be returned in response. A conversation is an adhoc discussion between a particular set of users, not featuring any specific name or description; it is a chat of 'Group' type. If you add a person to the existing conversation (group), it creates a whole new conversation.
   * HTTP Method: post
   * Endpoint: /team-messaging/v1/conversations
   * Rate Limit Group: Medium
   * App Permission: TeamMessaging
   */
  async post(createConversationRequest: CreateConversationRequest, restRequestConfig?: RestRequestConfig): Promise<TMConversationInfo> {
    const r = await this.rc.post<TMConversationInfo>(this.path(false), createConversationRequest, undefined, restRequestConfig);
    return r.data;
  }

  /**
   * Returns information about the specified conversation, including the list of conversation participants. A conversation is an adhoc discussion between a particular set of users, not featuring any specific name or description; it is a chat of 'Group' type. If you add a person to the existing conversation, it creates a whole new conversation.
   * HTTP Method: get
   * Endpoint: /team-messaging/v1/conversations/{chatId}
   * Rate Limit Group: Light
   * App Permission: TeamMessaging
   */
  async get(restRequestConfig?: RestRequestConfig): Promise<TMConversationInfo> {
    if (this.chatId === null) {
      throw new Error('chatId must be specified.');
    }
    const r = await this.rc.get<TMConversationInfo>(this.path(), undefined, restRequestConfig);
    return r.data;
  }
}
export default Index;
