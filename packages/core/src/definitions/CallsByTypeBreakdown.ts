/**
 * Result breakdown by type
*/
interface CallsByTypeBreakdown {
  /**
   * Value for Direct type
   * Required
   * Format: double
   */
  direct?: number;

  /**
   * Value for FromQueue type
   * Required
   * Format: double
   */
  fromQueue?: number;

  /**
   * Value for ParkRetrieval type
   * Required
   * Format: double
   */
  parkRetrieval?: number;

  /**
   * Value for Transferred type
   * Required
   * Format: double
   */
  transferred?: number;

  /**
   * Value for Outbound type
   * Required
   * Format: double
   */
  outbound?: number;

  /**
   * Value for Overflow type
   * Required
   * Format: double
   */
  overflow?: number;
}

export default CallsByTypeBreakdown;
