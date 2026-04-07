/**
 * Result breakdown by queue hours
 */
interface CallsByQueueHoursBreakdown {
  /**
   * Value for BusinessHours queue hours
   * Required
   * Format: double
   */
  businessHours?: number;

  /**
   * Value for AfterHours queue hours
   * Required
   * Format: double
   */
  afterHours?: number;
}

export default CallsByQueueHoursBreakdown;
