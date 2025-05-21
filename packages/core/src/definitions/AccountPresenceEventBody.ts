/**
 * Notification payload body
 */
interface AccountPresenceEventBody {
  /**
   * Internal identifier of an extension. Optional parameter
   * Default: ~
   */
  extensionId?: string;

  /**
   * Telephony presence status. Returned if telephony status is changed
   */
  telephonyStatus?:
    | "NoCall"
    | "CallConnected"
    | "Ringing"
    | "OnHold"
    | "ParkedCall";

  /**
   * Order number of a notification to state the chronology
   * Format: int32
   */
  sequence?: number;

  /**
   * Aggregated presence status, calculated from a number of sources
   */
  presenceStatus?: "Offline" | "Busy" | "Available";

  /**
   * User-defined presence status (as previously published by the user)
   */
  userStatus?: "Offline" | "Busy" | "Available";

  /**
   * Do Not Disturb status. Not applicable for User extensions
   *  if the new communication handling service is activated on account
   */
  dndStatus?:
    | "TakeAllCalls"
    | "DoNotAcceptDepartmentCalls"
    | "TakeDepartmentCallsOnly"
    | "DoNotAcceptAnyCalls"
    | "Unknown";

  /**
   * Meetings presence status. Specifies if a user is on a meeting
   */
  meetingStatus?: "Connected" | "Disconnected";

  /**
   * If set to `true` enables other extensions to see the extension presence status
   */
  allowSeeMyPresence?: boolean;

  /**
   * If `true` enables to ring extension phone, if any user monitored
   *  by this extension is ringing
   */
  ringOnMonitoredCall?: boolean;

  /**
   * If `true` enables the extension user to pick up a monitored line on hold
   */
  pickUpCallsOnHold?: boolean;

  /**
   * Internal identifier of a subscription owner extension
   */
  ownerId?: string;
}

export default AccountPresenceEventBody;
