interface RcwPagingForwardModel {
  /**
   * Number of items per page
   * Required
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 100
   */
  perPage?: number;

  /**
   * Current page token
   * Required
   */
  pageToken?: string;

  /**
   * Next page token (absent for the last page of the result set)
   */
  nextPageToken?: string;

  /**
   * Previous page token (absent for the first page of the result set)
 *  May be omitted if the result set does not support backward navigation.
   */
  previousPageToken?: string;
}

export default RcwPagingForwardModel;
