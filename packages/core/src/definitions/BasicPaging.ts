/**
 * Paging information
 */
interface BasicPaging {
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

export default BasicPaging;
