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

  /**
   * Number of records returned
   * Required
   * Format: int32
   */
  perPage?: number;
}

export default Paging;
