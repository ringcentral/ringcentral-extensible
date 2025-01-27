import CallQueueIdResource from "./CallQueueIdResource.js";

interface CallQueueOverflowSettingsRequestResource {
  /**
   * Call queue overflow status
   */
  enabled?: boolean;

  /** */
  items?: CallQueueIdResource[];
}

export default CallQueueOverflowSettingsRequestResource;
