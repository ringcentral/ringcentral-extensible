import CallQueueMember from "./CallQueueMember.js";

interface CallQueueMemberPresence {
  /** */
  member?: CallQueueMember;

  /**
   * Private member telephony availability status applied to calls of all queues
   */
  acceptQueueCalls?: boolean;

  /**
   * Call queue member availability in this particular queue
   */
  acceptCurrentQueueCalls?: boolean;
}

export default CallQueueMemberPresence;
