interface ConversationalInsightsUnitValues {
  /**
   * Format: float
   * Example: 0.97
   */
  confidence?: number;

  /**
   * Required
   * Example: RingCentral MVP
   */
  value?: string;

  /**
   * Required
   * Format: float
   * Example: 4.7
   */
  start?: number;

  /**
   * Required
   * Format: float
   * Example: 5.1
   */
  end?: number;
}

export default ConversationalInsightsUnitValues;
