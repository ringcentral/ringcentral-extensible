/**
 * One utterance of a call. Each utterance is a speakerId, text, start and end time
 */
interface TranscriptInsightUnit {
  /**
   * Participant ID
   * Required
   * Example: p-32423
   */
  speakerId?: string;

  /**
   * Text of the utterance
   * Required
   * Example: Hello user!
   */
  text?: string;

  /**
   * Start time of the utterance (in sec)
   * Required
   * Format: float
   * Example: 1.2
   */
  start?: number;

  /**
   * End time of the utterance (in sec)
   * Required
   * Format: float
   * Example: 4.2
   */
  end?: number;
}

export default TranscriptInsightUnit;
