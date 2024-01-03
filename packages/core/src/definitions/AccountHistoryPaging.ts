interface AccountHistoryPaging {
  /**
   * The current page number. 1-indexed, so the first page is 1 by default. May be omitted if result is empty
   *  (because non-existent page was specified or perPage=0 was requested)
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   */
  page?: number;

  /**
   * Current page size, describes how many items are in each page. Matches "perPage" parameter from the request
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 50
   */
  perPage?: number;

  /**
   * Total number of pages in a dataset. May be omitted for some resources due to performance reasons
   * Format: int32
   * Example: 25
   */
  total?: number;

  /**
   * Total number of elements in a dataset. May be omitted for some resources due to performance reasons
   * Format: int32
   * Example: 25
   */
  totalFound?: number;
}

export default AccountHistoryPaging;
