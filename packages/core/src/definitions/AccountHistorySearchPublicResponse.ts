import AccountHistoryPublicRecord from "./AccountHistoryPublicRecord";
import AccountHistoryPaging from "./AccountHistoryPaging";

interface AccountHistorySearchPublicResponse {
  /**
   * List of records
   */
  records?: AccountHistoryPublicRecord[];

  /** */
  paging?: AccountHistoryPaging;
}

export default AccountHistorySearchPublicResponse;
