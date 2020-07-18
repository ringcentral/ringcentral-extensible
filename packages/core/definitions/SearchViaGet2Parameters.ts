class SearchViaGet2Parameters {
  /**
   * only support 'userName' or 'email' filter expressions for now
   */
  filter?: string;

  /**
   * start index (1-based)
   * Default: 1
   */
  startIndex?: number;

  /**
   * page size
   * Default: 100
   */
  count?: number;
}

export default SearchViaGet2Parameters;
