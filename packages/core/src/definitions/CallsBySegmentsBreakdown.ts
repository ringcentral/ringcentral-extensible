/**
 * Result breakdown by segments
*/
interface CallsBySegmentsBreakdown {
  /**
   * Value for Ringing segment
   * Required
   * Format: double
   */
  ringing?: number;

  /**
   * Value for LiveTalk segment
   * Required
   * Format: double
   */
  liveTalk?: number;

  /**
   * Value for Hold segment
   * Required
   * Format: double
   */
  hold?: number;

  /**
   * Value for Park segment
   * Required
   * Format: double
   */
  park?: number;

  /**
   * Value for Transfer segment
   * Required
   * Format: double
   */
  transfer?: number;

  /**
   * Value for IVRPrompt segment
   * Required
   * Format: double
   */
  ivrPrompt?: number;

  /**
   * Value for Voicemail segment
   * Required
   * Format: double
   */
  voicemail?: number;

  /**
   * Value for VMGreeting segment
   * Required
   * Format: double
   */
  vmGreeting?: number;

  /**
   * Value for Setup segment
   * Required
   * Format: double
   */
  setup?: number;
}

export default CallsBySegmentsBreakdown;
