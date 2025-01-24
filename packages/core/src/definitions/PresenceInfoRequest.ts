interface PresenceInfoRequest {
  /** */
  userStatus?: "Offline" | "Busy" | "Available";

  /** */
  dndStatus?:
    | "TakeAllCalls"
    | "DoNotAcceptDepartmentCalls"
    | "TakeDepartmentCallsOnly"
    | "DoNotAcceptAnyCalls"
    | "Unknown";

  /** */
  message?: string;

  /** */
  allowSeeMyPresence?: boolean;

  /** */
  ringOnMonitoredCall?: boolean;

  /** */
  pickUpCallsOnHold?: boolean;

  /**
   * Configures the user presence visibility. When the `allowSeeMyPresence` parameter is set to `true`,
   *  the following visibility options are supported via this parameter - All, None, PermittedUsers
   */
  callerIdVisibility?: "All" | "None" | "PermittedUsers";
}

export default PresenceInfoRequest;
