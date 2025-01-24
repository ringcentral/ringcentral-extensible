interface CallLogSyncInfo {
  /**
   * Type of call log synchronization request: full or incremental sync
   * Required
   */
  syncType?: "FSync" | "ISync";

  /**
   * Synchronization token
   * Required
   */
  syncToken?: string;

  /**
   * Time of the last synchronization in (ISO 8601)[https://en.wikipedia.org/wiki/ISO_8601] format including timezone, for example *2016-03-10T18:07:52.534Z*
   * Required
   * Format: date-time
   */
  syncTime?: string;
}

export default CallLogSyncInfo;
