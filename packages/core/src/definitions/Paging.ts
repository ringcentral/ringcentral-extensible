/**
 * Paging
*/
interface Paging {
  /**
   * Current page offset token
   */
  currentPageToken?: string;

  /**
   * Next page offset token
   */
  nextPageToken?: string;
}

export default Paging;
