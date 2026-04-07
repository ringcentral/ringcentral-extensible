import type AccountHistoryPaging from "./AccountHistoryPaging.js";
import type AccountHistoryPublicRecord from "./AccountHistoryPublicRecord.js";

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
