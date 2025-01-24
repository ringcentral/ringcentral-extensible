import type CallQueuePresenceEventBody from "./CallQueuePresenceEventBody";

interface CallQueuePresenceEvent {
  /**
   * Universally unique identifier of a notification
   */
  uuid?: string;

  /**
   * Event filter name
   */
  event?: string;

  /**
   * Timestamp when this notification was sent in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example *2016-03-10T18:07:52.534Z*
   * Format: date-time
   */
  timestamp?: string;

  /**
   * Internal identifier of a subscription
   */
  subscriptionId?: string;

  /** */
  body?: CallQueuePresenceEventBody;
}

export default CallQueuePresenceEvent;
