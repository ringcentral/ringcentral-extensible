import {CallQueueServiceLevelSettings} from './index';

class CallQueueUpdateDetails {
  /**
   * Call queue service level settings
   */
  serviceLevelSettings?: CallQueueServiceLevelSettings;

  /**
   * Allows members to change their queue status
   */
  editableMemberStatus?: boolean;
}

export default CallQueueUpdateDetails;
