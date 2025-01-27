import CallQueueMemberId from "./CallQueueMemberId.js";

interface CallQueueUpdateMemberPresence {
  /** */
  member?: CallQueueMemberId;

  /**
   * Call queue member availability for calls of this queue
   */
  acceptCurrentQueueCalls?: boolean;
}

export default CallQueueUpdateMemberPresence;
