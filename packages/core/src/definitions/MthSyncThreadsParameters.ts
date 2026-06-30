/**
 * Query parameters for operation mthSyncThreads
 */
interface MthSyncThreadsParameters {
  /**
   * Type of message synchronization request:
   *    - FSync -- full sync
   *    - ISync -- incremental sync
   * Default: FSync
   */
  syncType?: "FSync" | "ISync";

  /**
   * Sync token (for "ISync" only)
   */
  syncToken?: string;
}

export default MthSyncThreadsParameters;
