import ActiveCallInfo from "./ActiveCallInfo.js";
import GetPresenceExtensionInfo from "./GetPresenceExtensionInfo.js";

interface PresenceInfoResponse {
  /**
   * Link to the presence resource
   * Format: uri
   */
  uri?: string;

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
   * Do Not Disturb status of a User extension. Applicable for User extensions
   *  if the new communication handling service is activated on account
   */
  dndStatusPersonal?: "TakeAllCalls" | "DoNotAcceptAnyCalls" | "Unknown";

  /**
   * Specifies if a Call Queue member extension will be able to receive Call Queue calls.
   *  Applicable for User extensions if the new communication handling service is activated on account.
   *  Used for Agent state type
   */
  acceptCallQueueCalls?: boolean;

  /**
   * Custom status message (as previously published by user)
   */
  message?: string;

  /**
   * If set to `true` enables other extensions to see the extension presence status
   */
  allowSeeMyPresence?: boolean;

  /**
   * Configures the user presence visibility. When the `allowSeeMyPresence` parameter is set to `true`,
   *  the following visibility options are supported via this parameter - All, None, PermittedUsers
   */
  callerIdVisibility?: "All" | "None" | "PermittedUsers";

  /**
   * If `true` enables to ring extension phone, if any user monitored
   *  by this extension is ringing
   */
  ringOnMonitoredCall?: boolean;

  /**
   * If `true` enables the extension user to pick up a monitored line on hold
   */
  pickUpCallsOnHold?: boolean;

  /** */
  activeCalls?: ActiveCallInfo[];

  /** */
  extension?: GetPresenceExtensionInfo;

  /**
   * Meetings presence status
   */
  meetingStatus?: "Connected" | "Disconnected";

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
   * Aggregated presence status, calculated from a number of sources
   */
  presenceStatus?: "Offline" | "Busy" | "Available";
}

export default PresenceInfoResponse;
