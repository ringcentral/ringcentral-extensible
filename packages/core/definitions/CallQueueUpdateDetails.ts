import {CallQueueServiceLevelSettings} from './index';

class CallQueueUpdateDetails {
  /**
   */
  serviceLevelSettings?: CallQueueServiceLevelSettings;

  /**
   * Allows members to change their queue status
   */
  editableMemberStatus?: boolean;
}
export default CallQueueUpdateDetails;
