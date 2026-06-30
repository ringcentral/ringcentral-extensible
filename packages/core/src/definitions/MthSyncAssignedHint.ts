import type MthSyncAssignedHintInitiator from "./MthSyncAssignedHintInitiator.js";
import type ThreadUserModel from "./ThreadUserModel.js";

interface MthSyncAssignedHint {
  /**
   * Required
   */
  recordType?:
    | "ThreadCreatedHint"
    | "ThreadResolvedHint"
    | "ThreadDeletedHint"
    | "ThreadAssignedHint";

  /**
   * Internal identifier of a system message
   * Required
   */
  id?: string;

  /**
   * Internal identifier of a message thread
   * Required
   */
  threadId?: string;

  /**
   * Last modification date/time (always the same as a creation time since the system hints are immutable)
   * Required
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   * Initiator of the action.
   *  Can be missing if the action was initiated by the system.
   */
  initiator?: MthSyncAssignedHintInitiator;

  /**
   */
  assignee?: ThreadUserModel;

  /**
   */
  previousAssignee?: ThreadUserModel;
}

export default MthSyncAssignedHint;
