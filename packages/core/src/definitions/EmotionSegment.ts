interface EmotionSegment {
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
   * Required
   * Example: Neutral
   */
  emotion?: 'Anger' | 'Excitement' | 'Frustration' | 'Joy' | 'Sadness' | 'Neutral';

  /**
   * Format: float
   * Example: 0.97
   */
  confidence?: number;
}

export default EmotionSegment;
