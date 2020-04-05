class ActiveCallInfoWithoutSIP
{
    /**
     * Internal identifier of a call
     */
    id?: string

    /**
     * Call direction
     * Enum: Inbound, Outbound
     */
    direction?: string

    /**
     * Phone number or extension number of a caller. For GCM transport type '_from' property should be used
     */
    from?: string

    /**
     * Name of a caller
     */
    fromName?: string

    /**
     * Phone number or extension number of a callee
     */
    to?: string

    /**
     * Name of a callee
     */
    toName?: string

    /**
     * Time when the call is actually started
     */
    startTime?: string

    /**
     * Telephony call status
     * Enum: NoCall, CallConnected, Ringing, OnHold, ParkedCall
     */
    telephonyStatus?: string

    /**
     * Internal identifier of a call session
     */
    sessionId?: string

    /**
     * Type of call termination. Supported for calls in 'NoCall' status. If the returned termination type is 'intermediate' it means the call is not actually ended, the connection is established on one of the devices
     * Enum: final, intermediate
     */
    terminationType?: string
}

export default ActiveCallInfoWithoutSIP