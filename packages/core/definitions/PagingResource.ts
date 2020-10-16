// Pagination details
class PagingResource {
  /**
   * Page token of the current response list
   */
  pageToken?: string;

  /**
   * Number of records per page
   * Default: 1000
   */
  perPage?: number;

  /**
   * First page token of the current filter criteria
   */
  firstPageToken?: string;

  /**
   * Previous page token of the current filter criteria
   */
  previousPageToken?: string;

  /**
   * Next page token of the current filter criteria
   */
  nextPageToken?: string;
}

export default PagingResource;
