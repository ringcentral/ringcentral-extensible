import ActiveCallInfoWithoutSIP from "./ActiveCallInfoWithoutSIP.js";

/**
 * Notification payload body
 */
interface DetailedExtensionPresenceEventBody {
  /**
   * Internal identifier of an extension
   * Default: ~
   */
  extensionId?: string;

  /**
   * Telephony presence status. Returned if telephony status is changed.
   */
  telephonyStatus?:
    | "NoCall"
    | "CallConnected"
    | "Ringing"
    | "OnHold"
    | "ParkedCall";

  /**
   * List of the latest 7 active calls on extension
   */
  activeCalls?: ActiveCallInfoWithoutSIP[];

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
   * Meetings presence status
   */
  meetingStatus?: "Connected" | "Disconnected";

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
   * Do Not Disturb status of a User extension. Connected to the DND State type.
   *  Applicable for User extensions if the new communication handling service is
   *  activated on account.
   */
  dndStatusPersonal?: "TakeAllCalls" | "DoNotAcceptAnyCalls" | "Unknown";

  /**
   * If `true` enables other extensions to see the extension presence status
   */
  allowSeeMyPresence?: boolean;

  /**
   * Specifies if a Call Queue member extension will be able to receive Call Queue calls.
   *  Used for the Agent state type. Applicable for User extensions if the new communication
   *  handling service is activated on account
   */
  acceptCallQueueCalls?: boolean;

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
   * Total number of active calls on extension at the present moment
   * Format: int32
   */
  totalActiveCalls?: number;

  /**
   * Internal identifier of a subscription owner extension
   */
  ownerId?: string;
}

export default DetailedExtensionPresenceEventBody;
