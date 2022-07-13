/**
 * Query parameters for operation readUserPresenceStatus
*/
interface ReadUserPresenceStatusParameters {
  /**
   * Whether to return detailed telephony state
   */
  detailedTelephonyState?: boolean;

  /**
   * Whether to return SIP data
   */
  sipData?: boolean;
}

export default ReadUserPresenceStatusParameters;
