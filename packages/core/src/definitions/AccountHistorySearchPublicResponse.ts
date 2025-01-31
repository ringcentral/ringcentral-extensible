import AccountHistoryPublicRecord from "./AccountHistoryPublicRecord.js";
import AccountHistoryPaging from "./AccountHistoryPaging.js";

interface AccountHistorySearchPublicResponse {
  /**
   * List of records
   */
  records?: AccountHistoryPublicRecord[];

  /** */
  paging?: AccountHistoryPaging;
}

export default AccountHistorySearchPublicResponse;
