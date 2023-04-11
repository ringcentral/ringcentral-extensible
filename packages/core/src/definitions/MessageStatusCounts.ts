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
   * Format: int64
   * Example: 7
   */
  count?: number;

  /**
   */
  errorCodeCounts?: object;
}

export default MessageStatusCounts;
