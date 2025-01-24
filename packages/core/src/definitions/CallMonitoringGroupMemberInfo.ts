interface CallMonitoringGroupMemberInfo {
  /**
   * Link to a call monitoring group member
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a call monitoring group member
   */
  id?: string;

  /**
   * Extension number of a call monitoring group member
   */
  extensionNumber?: string;

  /** */
  permissions?: ("Monitoring" | "Monitored")[];
}

export default CallMonitoringGroupMemberInfo;
