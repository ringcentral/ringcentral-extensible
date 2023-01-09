/**
 * Query parameters for operation listGlipChatsNew
*/
interface ListGlipChatsNewParameters {
  /**
   * Type of chats to be fetched. By default all type of chats will be fetched
   */
  type?: ('Personal' | 'Direct' | 'Group' | 'Team' | 'Everyone')[];

  /**
   * Number of chats to be fetched by one request. The maximum value is 250, by default - 30.
   * Maximum: 250
   * Format: int32
   * Default: 30
   */
  recordCount?: number;

  /**
   * Pagination token.
   */
  pageToken?: string;
}

export default ListGlipChatsNewParameters;
