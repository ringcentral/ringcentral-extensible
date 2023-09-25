import type CallQueueServiceLevelSettings from './CallQueueServiceLevelSettings';

interface CallQueueDetails {
  /**
   * Internal identifier of a call queue
   */
  id?: string;

  /**
   * Call queue name
   */
  name?: string;

  /**
   * Call queue extension number
   */
  extensionNumber?: string;

  /**
   * Call queue status
   */
  status?: 'Enabled' | 'Disabled' | 'NotActivated';

  /**
   */
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

export default CallQueueDetails;
