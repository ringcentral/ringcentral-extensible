/**
 * Result breakdown by response
*/
interface CallsByResponseBreakdown {
  /**
   * Value for Answered response
   * Required
   * Format: double
   */
  answered?: number;

  /**
   * Value for NotAnswered response
   * Required
   * Format: double
   */
  notAnswered?: number;

  /**
   * Value for Connected response
   * Required
   * Format: double
   */
  connected?: number;

  /**
   * Value for NotConnected response
   * Required
   * Format: double
   */
  notConnected?: number;
}

export default CallsByResponseBreakdown;
