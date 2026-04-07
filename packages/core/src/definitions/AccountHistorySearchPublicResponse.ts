import type AccountHistoryPublicRecord from "./AccountHistoryPublicRecord.js";
import type AccountHistoryPaging from "./AccountHistoryPaging.js";

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
