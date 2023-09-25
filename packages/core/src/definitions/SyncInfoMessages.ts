/**
 * Sync type, token and time
 */
interface SyncInfoMessages {
  /**
   * Type of message synchronization request:
   *    - FSync -- full sync
   *    - ISync -- incremental sync
   */
  syncType?: 'FSync' | 'ISync';

  /**
   * Synchronization token
   */
  syncToken?: string;

  /**
   * Last synchronization datetime in ISO 8601 format including
   *  timezone, for example 2016-03-10T18:07:52.534Z
   * Format: date-time
   */
  syncTime?: string;

  /**
   */
  olderRecordsExist?: boolean;
}

export default SyncInfoMessages;
