interface DiarizeSegment {
  /**
   * Required
   * Example: JohnDoe
   */
  speakerId?: string;

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

  /**
   * Format: float
   * Example: 0.97
   */
  confidence?: number;
}

export default DiarizeSegment;
