interface CallLogExtractSyncInfo {
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

  /**
   * Identifies if there are more calls data can be returned in the next API call (with 'ISync' sync type)
   * Required
   */
  newerRecordsExist?: boolean;
}

export default CallLogExtractSyncInfo;
