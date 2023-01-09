/**
 * SharedLines call handling action settings
*/
interface SharedLinesInfo {
  /**
   * Number of seconds to wait before forwarding unanswered calls. The value range is 10 - 80
   * Maximum: 80
   * Minimum: 10
   * Format: int32
   */
  timeout?: number;
}

export default SharedLinesInfo;
