import CallQueueInfo from "./CallQueueInfo.js";

interface CallQueueOverflowSettings {
  /**
   * Call queue overflow status
   */
  enabled?: boolean;

  /** */
  items?: CallQueueInfo[];
}

export default CallQueueOverflowSettings;
