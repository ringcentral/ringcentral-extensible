import ActiveCallInfo from './ActiveCallInfo'

class PresenceInfoResource
{
    /**
     * Enum: Offline, Busy, Available
     */
    userStatus: string

    /**
     * Enum: TakeAllCalls, DoNotAcceptDepartmentCalls, TakeDepartmentCallsOnly, DoNotAcceptAnyCalls, Unknown
     */
    dndStatus: string

    /**
     */
    message: string

    /**
     */
    allowSeeMyPresence: boolean

    /**
     */
    ringOnMonitoredCall: boolean

    /**
     */
    pickUpCallsOnHold: boolean

    /**
     */
    activeCalls: ActiveCallInfo[]
}

export default PresenceInfoResource