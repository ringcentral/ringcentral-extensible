/**
 * Settings about automatic reply message sending to collect consent.
 */
interface AutomaticConsentCollecting {
  /**
   * Necessity of automatic reply message sending to collect consent.
   */
  enabled?: boolean;

  /**
   * Reply message which will contain instructions how to grant opt-in or opt-out consent.
   */
  replyMessageBody?: string;
}

export default AutomaticConsentCollecting;
