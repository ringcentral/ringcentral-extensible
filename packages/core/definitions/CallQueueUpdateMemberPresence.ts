import {CallQueueMemberId} from './index';

class CallQueueUpdateMemberPresence {
  /**
   * Call queue member information
   */
  member?: CallQueueMemberId;

  /**
   * Call queue member availability for calls of this queue
   */
  acceptCurrentQueueCalls?: boolean;
}

export default CallQueueUpdateMemberPresence;
