class SuperviseCallSessionRequest {
  /**
   * Supervising mode
   * Required
   */
  mode?: 'Listen';

  /**
   * Internal identifier of a supervisor's device which will be used for call session monitoring
   * Required
   */
  supervisorDeviceId?: string;

  /**
   * Extension identifier of the user that will be monitored
   */
  agentExtensionId?: string;

  /**
   * Specifies if auto-answer SIP header should be sent. If auto-answer is set to 'True', the call is automatically answered by the supervising party, if set to 'False' - then the supervising party has to accept or decline the monitored call
   * Default: true
   */
  autoAnswer?: boolean;
}

export default SuperviseCallSessionRequest;
