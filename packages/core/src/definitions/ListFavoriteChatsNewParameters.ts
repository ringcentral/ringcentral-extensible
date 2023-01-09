/**
 * Query parameters for operation listFavoriteChatsNew
*/
interface ListFavoriteChatsNewParameters {
  /**
   * Max number of chats to be fetched by one request (Not more than 250).
   * Maximum: 250
   * Format: int32
   * Default: 30
   */
  recordCount?: number;
}

export default ListFavoriteChatsNewParameters;
