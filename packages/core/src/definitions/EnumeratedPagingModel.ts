interface EnumeratedPagingModel {
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
   * The current page number. 1-indexed, so the first page is 1
   *  by default. May be omitted if result is empty (because non-existent page
   *  was specified or perPage=0 was requested)
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 5
   */
  page?: number;

  /**
   * The zero-based number of the first element on the current page.
   *  Omitted if the page is omitted or result is empty
   * Format: int32
   */
  pageStart?: number;

  /**
   * The zero-based index of the last element on the current page.
   *  Omitted if the page is omitted or result is empty
   * Format: int32
   * Example: 5
   */
  pageEnd?: number;

  /**
   * The total number of pages in a dataset. May be omitted for
   *  some resources due to performance reasons
   * Format: int32
   * Example: 25
   */
  totalPages?: number;

  /**
   * The total number of elements in a dataset. May be omitted for
   *  some resource due to performance reasons
   * Format: int32
   * Example: 25
   */
  totalElements?: number;
}

export default EnumeratedPagingModel;
