/**
 * Result breakdown by queue SLA
*/
interface CallsByQueueSlaBreakdown {
  /**
   * Value for InSla queue SLA
   * Required
   * Format: double
   */
  inSla?: number;

  /**
   * Value for OutSla queue SLA
   * Required
   * Format: double
   */
  outOfSla?: number;
}

export default CallsByQueueSlaBreakdown;
