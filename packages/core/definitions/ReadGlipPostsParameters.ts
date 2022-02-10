/**
 * Query parameters for operation readGlipPosts
 */
class ReadGlipPostsParameters {
  /**
   * Max number of posts to be fetched by one request (not more than 250)
   * Maximum: 250
   * Default: 30
   */
  recordCount?: number;

  /**
   * Pagination token.
   */
  pageToken?: string;
}
export default ReadGlipPostsParameters;
