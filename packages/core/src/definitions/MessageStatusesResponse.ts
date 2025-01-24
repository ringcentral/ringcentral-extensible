import type MessageStatusCounts from "./MessageStatusCounts";

/**
 * The messages status object with details of each status
 */
interface MessageStatusesResponse {
  /** */
  queued?: MessageStatusCounts;

  /** */
  delivered?: MessageStatusCounts;

  /** */
  deliveryFailed?: MessageStatusCounts;

  /** */
  sent?: MessageStatusCounts;

  /** */
  sendingFailed?: MessageStatusCounts;
}

export default MessageStatusesResponse;
