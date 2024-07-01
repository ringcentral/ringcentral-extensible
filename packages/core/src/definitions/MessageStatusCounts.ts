/**
 * Message status parameters
 */
interface MessageStatusCounts {
  /**
   * Total cost of all messages with this status code
   * Format: float
   */
  cost?: number;

  /**
   * Count of messages with this status code
   * Format: int32
   * Example: 7
   */
  count?: number;

  /**
   * Message sending/delivery errors. Returned in `deliveryFailed` and `sendingFailed` resources
   */
  errorCodeCounts?: object;
}

export default MessageStatusCounts;
