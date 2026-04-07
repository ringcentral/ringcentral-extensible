interface SummaryUnit {
  /**
   * Required
   * Example: JohnDoe
   */
  speakerId?: string;

  /**
   * Required
   * Example: Hello! This is John.
   */
  text?: string;

  /**
   * Required
   * Format: float
   * Example: 0.3
   */
  start?: number;

  /**
   * Required
   * Format: float
   * Example: 5.1
   */
  end?: number;
}

export default SummaryUnit;
