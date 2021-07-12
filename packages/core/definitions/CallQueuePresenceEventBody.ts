// Notification payload body
class CallQueuePresenceEventBody {
  /**
   * Agent extension ID
   */
  extensionId?: string;

  /**
   * Call queue extension ID
   */
  callQueueId?: string;

  /**
   * Call queue agent availability for calls of this queue
   */
  acceptCalls?: boolean;
}
export default CallQueuePresenceEventBody;
