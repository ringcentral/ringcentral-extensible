class SyncInfo {
  /**
   */
  syncType?: 'FSync' | 'ISync';

  /**
   */
  syncToken?: string;

  /**
   * Format: date-time
   */
  syncTime?: string;

  /**
   */
  olderRecordsExist?: boolean;
}
export default SyncInfo;
