import type CallQueueId from "./CallQueueId";

interface ExtensionCallQueueUpdatePresence {
  /** */
  callQueue?: CallQueueId;

  /**
   * Call queue agent availability for calls of this queue
   */
  acceptCalls?: boolean;
}

export default ExtensionCallQueueUpdatePresence;
