class ReadGlipPostsParameters
{
  /**
   * Max number of posts to be fetched by one request (Not more than 250).
   * Maximum: 250
   * Default: 30
   */
  recordCount?: number

  /**
   * Pagination token.
   */
  pageToken?: string
}

export default ReadGlipPostsParameters
