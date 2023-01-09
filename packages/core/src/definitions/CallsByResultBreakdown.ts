/**
 * Result breakdown by call result
*/
interface CallsByResultBreakdown {
  /**
   * Value for Completed result
   * Required
   * Format: double
   */
  completed?: number;

  /**
   * Value for Abandoned result
   * Required
   * Format: double
   */
  abandoned?: number;

  /**
   * Value for Voicemail result
   * Required
   * Format: double
   */
  voicemail?: number;

  /**
   * Value for Missed result
   * Required
   * Format: double
   */
  missed?: number;

  /**
   * Value for Accepted result
   * Required
   * Format: double
   */
  accepted?: number;

  /**
   * Value for Unknown result
   * Required
   * Format: double
   */
  unknown?: number;
}

export default CallsByResultBreakdown;
