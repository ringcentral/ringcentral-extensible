/**
 * Query parameters for operation listRecentChatsNew
 */
interface ListRecentChatsNewParameters {
  /**
   * Type of chats to be fetched. By default all chat types are returned
   */
  type?: ('Everyone' | 'Group' | 'Personal' | 'Direct' | 'Team')[];

  /**
   * Max number of chats to be fetched by one request (Not more than 250).
   * Maximum: 250
   * Format: int32
   * Default: 30
   */
  recordCount?: number;
}

export default ListRecentChatsNewParameters;
