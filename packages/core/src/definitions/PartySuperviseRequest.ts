interface PartySuperviseRequest {
  /**
   * Supervising mode
   * Required
   * Example: Listen
   */
  mode?: "Listen";

  /**
   * Internal identifier of a supervisor's device
   * Required
   * Example: 191888004
   */
  supervisorDeviceId?: string;

  /**
   * Mailbox ID of a user that will be monitored
   * Required
   * Example: 400378008008
   */
  agentExtensionId?: string;

  /**
   * Specifies if auto-answer SIP header should be sent. If auto-answer is set to `true`, the call is automatically answered by the supervising party, if set to `false` - then the supervising party has to accept or decline the monitored call
   * Default: true
   */
  autoAnswer?: boolean;

  /**
   * Specifies session description protocol (SDP) setting. The possible values are 'sendOnly' (only sending) meaning one-way audio streaming; and 'sendRecv' (sending/receiving) meaning two-way audio streaming
   */
  mediaSDP?: "sendOnly" | "sendRecv";
}

export default PartySuperviseRequest;
