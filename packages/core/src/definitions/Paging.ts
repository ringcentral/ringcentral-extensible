/**
 * Paging information
 */
interface Paging {
  /**
   * Current offset token
   * Required
   */
  currentPageToken?: string;

  /**
   * Next page offset token
   */
  nextPageToken?: string;
}

export default Paging;
