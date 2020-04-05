import GetPresenceExtensionInfo from './GetPresenceExtensionInfo'
import ActiveCallInfo from './ActiveCallInfo'

class GetPresenceInfo
{
  /**
   * Canonical URI of a presence info resource
   */
  uri?: string

  /**
   * If 'True' enables other extensions to see the extension presence status
   */
  allowSeeMyPresence?: boolean

  /**
   * Extended DnD (Do not Disturb) status. Cannot be set for Department/Announcement/Voicemail (Take Messages Only)/Fax User/Shared Lines Group/Paging Only Group/IVR Menu/Application Extension/Park Location extensions. The 'DoNotAcceptDepartmentCalls' and 'TakeDepartmentCallsOnly' values are applicable only for extensions - members of a Department; if these values are set for department outsiders, the 400 Bad Request error code is returned. The 'TakeDepartmentCallsOnly' status can be set through the old RingCentral user interface and is available for some migrated accounts only.
   * Enum: TakeAllCalls, DoNotAcceptAnyCalls, DoNotAcceptDepartmentCalls, TakeDepartmentCallsOnly
   */
  dndStatus?: string

  /**
   * Information on extension, for which this presence data is returned
   */
  extension?: GetPresenceExtensionInfo

  /**
   * Custom status message (as previously published by user)
   */
  message?: string

  /**
   * If 'True' enables the extension user to pick up a monitored line on hold
   */
  pickUpCallsOnHold?: boolean

  /**
   * Aggregated presence status, calculated from a number of sources
   * Enum: Offline, Busy, Available
   */
  presenceStatus?: string

  /**
   * If 'True' enables to ring extension phone, if any user monitored by this extension is ringing
   */
  ringOnMonitoredCall?: boolean

  /**
   * Telephony presence status
   * Enum: NoCall, CallConnected, Ringing, OnHold, ParkedCall
   */
  telephonyStatus?: string

  /**
   * User-defined presence status (as previously published by the user)
   * Enum: Offline, Busy, Available
   */
  userStatus?: string

  /**
   * RingCentral Meetings presence
   * Enum: Connected, Disconnected
   */
  meetingStatus?: string

  /**
   * Information on active calls
   */
  activeCalls?: ActiveCallInfo[]
}

export default GetPresenceInfo
