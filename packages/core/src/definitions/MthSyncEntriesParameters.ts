/**
 * Query parameters for operation mthSyncEntries
 */
interface MthSyncEntriesParameters {
  /**
   * Scope of synchronization (`syncType=FSync` only):
   *
   *  - `Accessible`: returns entries in threads monitored by the current user;
   *  - `Unassigned`: returns entries in accessible unassigned threads;
   *  - `AssignedToMe`: returns entries in threads that are assigned to the current user;
   *  - `AssignedToMeAndUnassigned`: returns entries in threads that are assigned to the current user or unassigned;
   *  - `Explicit`: returns entries in threads specified through the `threadIds` parameter.
   * Default: AssignedToMe
   */
  scope?:
    | "Accessible"
    | "Unassigned"
    | "AssignedToMe"
    | "AssignedToMeAndUnassigned"
    | "Explicit";

  /**
   * List of thread IDs to synchronize (`Explicit` scope only)
   */
  threadIds?: string[];

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

export default MthSyncEntriesParameters;
