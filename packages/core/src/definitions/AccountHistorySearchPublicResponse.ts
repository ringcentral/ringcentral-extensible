import type AccountHistoryPublicRecord from './AccountHistoryPublicRecord';
import type AccountHistoryPaging from './AccountHistoryPaging';

interface AccountHistorySearchPublicResponse {
  /**
   * List of records
   */
  records?: AccountHistoryPublicRecord[];

  /**
   */
  paging?: AccountHistoryPaging;
}

export default AccountHistorySearchPublicResponse;
