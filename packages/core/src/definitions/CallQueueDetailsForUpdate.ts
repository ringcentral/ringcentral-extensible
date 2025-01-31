import SiteReference from "./SiteReference.js";
import CallQueueServiceLevelSettings from "./CallQueueServiceLevelSettings.js";

interface CallQueueDetailsForUpdate {
  /**
   * Extension number of a call queue
   */
  extensionNumber?: string;

  /**
   * Name of a call queue
   */
  name?: string;

  /**
   * Group extension status
   */
  status?: "Enabled" | "Disabled" | "NotActivated";

  /**
   * Indicates whether it is an emergency call queue extension or not
   */
  subType?: "Emergency";

  /** */
  site?: SiteReference;

  /** */
  serviceLevelSettings?: CallQueueServiceLevelSettings;

  /**
   * Allows members to change their queue status
   */
  editableMemberStatus?: boolean;

  /**
   * Alert timer or pickup setting. Delay time in seconds before call queue group members are notified when calls are queued
   * Format: int32
   */
  alertTimer?: number;
}

export default CallQueueDetailsForUpdate;
