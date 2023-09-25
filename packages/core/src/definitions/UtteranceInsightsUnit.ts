interface UtteranceInsightsUnit {
  /**
   * Required
   * Example: Emotion
   */
  name?: 'Emotion';

  /**
   * Required
   * Example: Neutral
   */
  value?: string;

  /**
   * Format: float
   * Example: 0.97
   */
  confidence?: number;
}

export default UtteranceInsightsUnit;
