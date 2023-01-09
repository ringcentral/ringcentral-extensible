/**
 * The count of the status
*/
interface MessageStatusCounts {
  /**
   * The count of the status
   * Format: int64
   * Example: 7
   */
  count?: number;

  /**
   * Format: int64
   */
  errorCodeCounts?: number;
}

export default MessageStatusCounts;
