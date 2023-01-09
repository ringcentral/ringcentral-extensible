/**
 * Result breakdown by origin
*/
interface CallsByOriginBreakdown {
  /**
   * Value for Internal origin
   * Required
   * Format: double
   */
  internal?: number;

  /**
   * Value for External origin
   * Required
   * Format: double
   */
  external?: number;
}

export default CallsByOriginBreakdown;
