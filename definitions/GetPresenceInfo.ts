import GetPresenceExtensionInfo from './GetPresenceExtensionInfo'
import ActiveCallInfo from './ActiveCallInfo'

class GetPresenceInfo
{
    /// <summary>
    /// Canonical URI of a presence info resource
    /// </summary>
    uri: string

    /// <summary>
    /// If 'True' enables other extensions to see the extension presence status
    /// </summary>
    allowSeeMyPresence: boolean

    /// <summary>
    /// Extended DnD (Do not Disturb) status. Cannot be set for Department/Announcement/Voicemail (Take Messages Only)/Fax User/Shared Lines Group/Paging Only Group/IVR Menu/Application Extension/Park Location extensions. The 'DoNotAcceptDepartmentCalls' and 'TakeDepartmentCallsOnly' values are applicable only for extensions - members of a Department; if these values are set for department outsiders, the 400 Bad Request error code is returned. The 'TakeDepartmentCallsOnly' status can be set through the old RingCentral user interface and is available for some migrated accounts only.
    /// Enum: TakeAllCalls, DoNotAcceptAnyCalls, DoNotAcceptDepartmentCalls, TakeDepartmentCallsOnly
    /// </summary>
    dndStatus: string

    /// <summary>
    /// Information on extension, for which this presence data is returned
    /// </summary>
    extension: GetPresenceExtensionInfo

    /// <summary>
    /// Custom status message (as previously published by user)
    /// </summary>
    message: string

    /// <summary>
    /// If 'True' enables the extension user to pick up a monitored line on hold
    /// </summary>
    pickUpCallsOnHold: boolean

    /// <summary>
    /// Aggregated presence status, calculated from a number of sources
    /// Enum: Offline, Busy, Available
    /// </summary>
    presenceStatus: string

    /// <summary>
    /// If 'True' enables to ring extension phone, if any user monitored by this extension is ringing
    /// </summary>
    ringOnMonitoredCall: boolean

    /// <summary>
    /// Telephony presence status
    /// Enum: NoCall, CallConnected, Ringing, OnHold, ParkedCall
    /// </summary>
    telephonyStatus: string

    /// <summary>
    /// User-defined presence status (as previously published by the user)
    /// Enum: Offline, Busy, Available
    /// </summary>
    userStatus: string

    /// <summary>
    /// RingCentral Meetings presence
    /// Enum: Connected, Disconnected
    /// </summary>
    meetingStatus: string

    /// <summary>
    /// Information on active calls
    /// </summary>
    activeCalls: ActiveCallInfo[]
}

export default GetPresenceInfo