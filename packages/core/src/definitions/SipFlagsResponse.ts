/**
 * SIP flags information
 */
interface SipFlagsResponse {
  /**
   * Indicates that VoIP calling feature is enabled
   */
  voipFeatureEnabled?: boolean;

  /**
   * Indicates that the request is sent from IP address of a country where VoIP calling is disallowed
   */
  voipCountryBlocked?: boolean;

  /**
   * Indicates that outbound calls are enabled
   */
  outboundCallsEnabled?: boolean;

  /**
   */
  dscpEnabled?: boolean;

  /**
   * Format: int32
   */
  dscpSignaling?: number;

  /**
   * Format: int32
   */
  dscpVoice?: number;

  /**
   * Format: int32
   */
  dscpVideo?: number;
}

export default SipFlagsResponse;
