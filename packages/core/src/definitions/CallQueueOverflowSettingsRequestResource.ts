import type CallQueueIdResource from "./CallQueueIdResource";

interface CallQueueOverflowSettingsRequestResource {
  /**
   * Call queue overflow status
   */
  enabled?: boolean;

  /** */
  items?: CallQueueIdResource[];
}

export default CallQueueOverflowSettingsRequestResource;
