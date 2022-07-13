import CallQueueServiceLevelSettings from './CallQueueServiceLevelSettings';

interface CallQueueUpdateDetails {
  /**
   */
  serviceLevelSettings?: CallQueueServiceLevelSettings;

  /**
   * Allows members to change their queue status
   */
  editableMemberStatus?: boolean;
}

export default CallQueueUpdateDetails;
