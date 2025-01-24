import type TMChatMemberInfo from "./TMChatMemberInfo";

interface TMConversationInfo {
  /**
   * Internal identifier of a conversation
   */
  id?: string;

  /**
   * Type of conversation
   */
  type?: "Direct" | "Personal" | "Group";

  /**
   * Conversation creation datetime in ISO 8601 format
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Conversation last change datetime in ISO 8601 format
   * Format: date-time
   */
  lastModifiedTime?: string;

  /** */
  members?: TMChatMemberInfo[];
}

export default TMConversationInfo;
