import {CallQueueServiceLevelSettings} from './index';

class CallQueueDetails {
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
}

export default CallQueueDetails;
