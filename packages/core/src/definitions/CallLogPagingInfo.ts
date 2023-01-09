interface CallLogPagingInfo {
  /**
   * The current page number. 1-indexed, so the first page is 1 by default. May be omitted if result is empty (because non-existent page was specified or perPage=0 was requested)
   * Format: int32
   */
  page?: number;

  /**
   * Current page size, describes how many items are in each page. Maximum value is 1000. If perPage value in the request is greater than 1000, the maximum value (1000) is applied
   * Format: int32
   */
  perPage?: number;

  /**
   * The zero-based number of the first element on the current page. Omitted if the page is omitted or result is empty
   * Format: int32
   */
  pageStart?: number;

  /**
   * The zero-based index of the last element on the current page. Omitted if the page is omitted or result is empty
   * Format: int32
   */
  pageEnd?: number;
}

export default CallLogPagingInfo;
