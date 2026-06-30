interface SyncInfoModel {
  /**
   * Type of message synchronization request:
   *    - FSync -- full sync
   *    - ISync -- incremental sync
   * Required
   */
  syncType?: "FSync" | "ISync";

  /**
   * Synchronization token
   * Required
   */
  syncToken?: string;

  /**
   * Last synchronization date/time
   * Required
   * Format: date-time
   */
  syncTime?: string;
}

export default SyncInfoModel;
