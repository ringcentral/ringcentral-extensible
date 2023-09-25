/**
 * Paging information
 */
interface Paging {
  /**
   * Current offset token
   */
  currentPageToken?: string;

  /**
   * Next page offset token
   */
  nextPageToken?: string;
}

export default Paging;
