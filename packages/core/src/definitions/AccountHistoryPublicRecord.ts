import { AccountHistoryRecordPublicInitiator, AccountHistoryRecordTarget, AccountHistoryRecordPublicDetails } from './index';

class AccountHistoryPublicRecord {
  /**
   * Internal record identifier
   * Example: 9835bead-397b-4ba8-b457-73f07ab79997
   */
  id?: string;

  /**
   * Timestamp of an event (provided by a client), RFC3339 date-time format, UTC time zone.
   * Format: date-time
   */
  eventTime?: string;

  /**
   */
  initiator?: AccountHistoryRecordPublicInitiator;

  /**
   * Action type
   * Example: CHANGE_SECRET_INFO
   */
  actionId?: string;

  /**
   * Operation: "CREATE", "UPDATE", or "DELETE"
   * Example: UPDATE
   */
  eventType?: string;

  /**
   * Account which is related with the particular record.
   * Example: 403858014008
   */
  accountId?: string;

  /**
   * Account (company) name
   * Example: Some Company
   */
  accountName?: string;

  /**
   */
  target?: AccountHistoryRecordTarget;

  /**
   * IP-address of a client. If not specified RCClientIp header value is used
   * Example: 192.168.42.6
   */
  clientIp?: string;

  /**
   * Custom top-level comment
   */
  comment?: string;

  /**
   */
  details?: AccountHistoryRecordPublicDetails;
}
export default AccountHistoryPublicRecord;
