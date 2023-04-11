/**
 * SMS and Pager only. Information about a conversation the message belongs to
*/
interface ConversationInfo {
  /**
   * Internal identifier of a conversation
   */
  id?: string;

  /**
   * Deprecated. Link to a conversation resource
   * Format: uri
   */
  uri?: string;
}

export default ConversationInfo;
