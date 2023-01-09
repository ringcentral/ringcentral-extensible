import AccountHistoryRecordPublicInitiator from './AccountHistoryRecordPublicInitiator';
import AccountHistoryRecordTarget from './AccountHistoryRecordTarget';
import AccountHistoryRecordPublicDetails from './AccountHistoryRecordPublicDetails';

interface AccountHistoryPublicRecord {
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
   * Operation: "CREATE", "UPDATE", "DELETE" or custom
   * Example: UPDATE
   */
  eventType?: string;

  /**
   * Account identifier which is related with the particular record.
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
   * IP-address of a client.
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
