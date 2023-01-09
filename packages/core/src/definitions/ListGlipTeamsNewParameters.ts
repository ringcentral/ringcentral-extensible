/**
 * Query parameters for operation listGlipTeamsNew
*/
interface ListGlipTeamsNewParameters {
  /**
   * Number of teams to be fetched by one request. The maximum value is 250, by default - 30
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

export default ListGlipTeamsNewParameters;
