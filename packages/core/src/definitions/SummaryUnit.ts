interface SummaryUnit {
  /**
   * Example: JohnDoe
   */
  speakerId?: string;

  /**
   * Required
   * Example: Hello! This is John.
   */
  text?: string;

  /**
   * Format: float
   * Example: 0.3
   */
  start?: number;

  /**
   * Format: float
   * Example: 5.1
   */
  end?: number;
}

export default SummaryUnit;
