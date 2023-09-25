import type AccountHistoryRecordDetailsParameters from './AccountHistoryRecordDetailsParameters';

interface AccountHistoryRecordPublicDetails {
  /**
   * Event details (additional parameters)
   */
  parameters?: AccountHistoryRecordDetailsParameters[];
}

export default AccountHistoryRecordPublicDetails;
