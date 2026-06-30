/**
 * Query parameters for operation readGlipThreadPostsNew
 */
interface ReadGlipThreadPostsNewParameters {
  /**
   * Max number of posts to be fetched by one request (not more than 250)
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

export default ReadGlipThreadPostsNewParameters;
