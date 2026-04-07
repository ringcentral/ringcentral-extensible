interface MsTeamsUserListResponseMappings {
  /**
   * RingCentral extension ID of the user to connect
   */
  extensionId?: string;

  /**
   * Phone number in e.164 format (with '+' prefix)
   * Example: +16501234567
   */
  phoneNumber?: string;

  /**
   * Connection status of the Microsoft Teams Direct Routing user
   */
  status?:
    | "Connected"
    | "Initial"
    | "RemoteNotFound"
    | "OutOfSync"
    | "Connecting"
    | "Disconnecting"
    | "DisconnectFailed"
    | "RemoteUserRemoved";
}

export default MsTeamsUserListResponseMappings;
