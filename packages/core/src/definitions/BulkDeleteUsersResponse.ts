import type BulkDeleteUsersResponseRecords from './BulkDeleteUsersResponseRecords';

interface BulkDeleteUsersResponse {
  /**
   * Required
   */
  records?: BulkDeleteUsersResponseRecords[];
}

export default BulkDeleteUsersResponse;
