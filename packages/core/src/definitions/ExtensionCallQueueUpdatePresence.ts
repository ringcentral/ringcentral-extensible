import CallQueueId from "./CallQueueId.js";

interface ExtensionCallQueueUpdatePresence {
  /** */
  callQueue?: CallQueueId;

  /**
   * Call queue agent availability for calls of this queue
   */
  acceptCalls?: boolean;
}

export default ExtensionCallQueueUpdatePresence;
