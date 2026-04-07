interface SummaryInsightUnit {
  /**
   * Value of the summary
   * Required
   * Example: conversational insights text
   */
  value?: string;

  /**
   * Start time of the insight (in sec)
   * Required
   * Format: float
   * Example: 1.2
   */
  start?: number;

  /**
   * End time of the insight (in sec)
   * Required
   * Format: float
   * Example: 4.2
   */
  end?: number;
}

export default SummaryInsightUnit;
