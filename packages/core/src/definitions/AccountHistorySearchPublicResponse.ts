import type AccountHistoryPublicRecord from './AccountHistoryPublicRecord';

interface AccountHistorySearchPublicResponse {
  /**
   * List of Records
   */
  records?: AccountHistoryPublicRecord[];
}

export default AccountHistorySearchPublicResponse;
