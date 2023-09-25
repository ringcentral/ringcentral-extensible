import type CallQueueMemberId from './CallQueueMemberId';

interface CallQueueUpdateMemberPresence {
  /**
   */
  member?: CallQueueMemberId;

  /**
   * Call queue member availability for calls of this queue
   */
  acceptCurrentQueueCalls?: boolean;
}

export default CallQueueUpdateMemberPresence;
