import type Host from "./Host";

/**
 * Recording information
 */
interface CloudRecording {
  /**
   * Call id
   * Required
   */
  id?: string;

  /**
   * Short bridge id
   * Required
   */
  shortId?: string;

  /**
   * Start time ISO 8601
   * Required
   * Format: date-time
   */
  startTime?: string;

  /**
   * Meeting duration in seconds
   * Format: int32
   * Example: 36
   */
  duration?: number;

  /**
   * Meeting name
   * Required
   */
  displayName?: string;

  /**
   * Required
   */
  hostInfo?: Host;

  /**
   * Link to the recording file. Not used anymore by Web team
   * Required
   */
  mediaLink?: string;

  /**
   * Encrypted link to the recording file
   * Required
   */
  url?: string;

  /**
   * Date after which recording will be deleted
   */
  expiresIn?: string;
}

export default CloudRecording;
