import ActiveCallInfo from './ActiveCallInfo'

class PresenceInfoResource
{
    /// <summary>
    /// Enum: Offline, Busy, Available
    /// </summary>
    userStatus: string

    /// <summary>
    /// Enum: TakeAllCalls, DoNotAcceptDepartmentCalls, TakeDepartmentCallsOnly, DoNotAcceptAnyCalls, Unknown
    /// </summary>
    dndStatus: string

    /// <summary>
    /// </summary>
    message: string

    /// <summary>
    /// </summary>
    allowSeeMyPresence: boolean

    /// <summary>
    /// </summary>
    ringOnMonitoredCall: boolean

    /// <summary>
    /// </summary>
    pickUpCallsOnHold: boolean

    /// <summary>
    /// </summary>
    activeCalls: ActiveCallInfo[]
}

export default PresenceInfoResource