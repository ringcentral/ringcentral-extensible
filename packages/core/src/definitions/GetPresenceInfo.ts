import GetPresenceExtensionInfo from "./GetPresenceExtensionInfo.js";
import ActiveCallInfo from "./ActiveCallInfo.js";

interface GetPresenceInfo {
  /**
   * Canonical URI of a presence info resource
   * Format: uri
   */
  uri?: string;

  /**
   * If set to `true` - enables other extensions to see the extension presence status
   */
  allowSeeMyPresence?: boolean;

  /**
   * Configures the user presence visibility. When the `allowSeeMyPresence` parameter is set to `true`,
   *  the following visibility options are supported via this parameter - All, None, PermittedUsers
   */
  callerIdVisibility?: "All" | "None" | "PermittedUsers";

  /**
   * Extended DnD (Do not Disturb) status. Cannot be set for Department/Announcement/Voicemail
   *  (Take Messages Only)/Fax User/Shared Lines Group/Paging Only Group/IVR
   *  Menu/Application Extension/Park Location extensions. The 'DoNotAcceptDepartmentCalls'
   *  and 'TakeDepartmentCallsOnly' values are applicable only for extensions
   *  - members of a Department; if these values are set for department outsiders,
   *  the 400 Bad Request error code is returned. The 'TakeDepartmentCallsOnly'
   *  status can be set through the old RingCentral user interface and is available
   *  for some migrated accounts only.
   */
  dndStatus?:
    | "TakeAllCalls"
    | "DoNotAcceptAnyCalls"
    | "DoNotAcceptDepartmentCalls"
    | "TakeDepartmentCallsOnly";

  /** */
  extension?: GetPresenceExtensionInfo;

  /**
   * Custom status message (as previously published by user)
   */
  message?: string;

  /**
   * If `true` enables the extension user to pick up a monitored line on hold
   */
  pickUpCallsOnHold?: boolean;

  /**
   * Aggregated presence status, calculated from a number of sources
   */
  presenceStatus?: "Offline" | "Busy" | "Available";

  /**
   * If `true` enables to ring extension phone, if any user monitored by this extension is ringing
   */
  ringOnMonitoredCall?: boolean;

  /**
   * Telephony presence status
   */
  telephonyStatus?:
    | "NoCall"
    | "CallConnected"
    | "Ringing"
    | "OnHold"
    | "ParkedCall";

  /**
   * User-defined presence status (as previously published by the user)
   */
  userStatus?: "Offline" | "Busy" | "Available";

  /**
   * RingCentral Meetings presence
   */
  meetingStatus?: "Connected" | "Disconnected";

  /**
   * Information on active calls
   */
  activeCalls?: ActiveCallInfo[];
}

export default GetPresenceInfo;
