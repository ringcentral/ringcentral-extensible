interface NonEnumeratedPagingModel {
  /**
   * Current page size, describes how many items are in each page.
   *  Matches "perPage" parameter from the request.
   * Required
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 50
   */
  perPage?: number;

  /**
   * Current page token. May be omitted if result is empty (because non-existent page
   *  was specified or perPage=0 was requested)
   */
  pageToken?: string;

  /**
   * A page token to be used to fetch the next page of the result set. May be omitted if the current page is the last one.
   */
  nextPageToken?: string;

  /**
   * A page token to be used to fetch the previous page of the result set.
   *  May be omitted if the current page is the first one or if the result set does not support backward navigation.
   */
  previousPageToken?: string;

  /**
   * A page token to be used to fetch the first page of the result set.
   */
  firstPageToken?: string;
}

export default NonEnumeratedPagingModel;
