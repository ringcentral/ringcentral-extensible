import type PresenceCallQueueInfo from "./PresenceCallQueueInfo";

interface ExtensionCallQueuePresence {
  /** */
  callQueue?: PresenceCallQueueInfo;

  /**
   * Call queue agent availability for calls of this queue
   */
  acceptCalls?: boolean;
}

export default ExtensionCallQueuePresence;
