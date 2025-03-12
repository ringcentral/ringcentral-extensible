interface HoldCallPartyRequest {
  /**
   * Protocol for hold mode initiation
   * Default: Auto
   */
  proto?:
    | "Auto"
    | "RC"
    | "BroadWorks"
    | "DisconnectHolder"
    | "BroadWorksOrDisconnectHolder";
}

export default HoldCallPartyRequest;
