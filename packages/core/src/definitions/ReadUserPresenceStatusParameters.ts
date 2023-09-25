/**
 * Query parameters for operation readUserPresenceStatus
 */
interface ReadUserPresenceStatusParameters {
  /**
   * Specifies whether to return a detailed telephony state or not
   */
  detailedTelephonyState?: boolean;

  /**
   * Specifies whether to return SIP data or not
   */
  sipData?: boolean;
}

export default ReadUserPresenceStatusParameters;
