/**
 * Result breakdown by direction
 */
interface CallsByDirectionBreakdown {
  /**
   * Value for Inbound direction
   * Required
   * Format: double
   */
  inbound?: number;

  /**
   * Value for Outbound direction
   * Required
   * Format: double
   */
  outbound?: number;
}

export default CallsByDirectionBreakdown;
