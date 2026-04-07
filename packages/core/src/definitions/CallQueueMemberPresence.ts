import CallQueueMember from "./CallQueueMember.js";

interface CallQueueMemberPresence {
  /**
   */
  member?: CallQueueMember;

  /**
   * Private member telephony availability status applied to calls
   *  of all queues. Please note - this parameter can be passed in request body,
   *  but will be ignored
   */
  acceptQueueCalls?: boolean;

  /**
   * Call queue member availability in this particular queue
   */
  acceptCurrentQueueCalls?: boolean;
}

export default CallQueueMemberPresence;
