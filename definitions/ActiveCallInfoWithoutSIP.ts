class ActiveCallInfoWithoutSIP
{
    /// <summary>
    /// Internal identifier of a call
    /// </summary>
    id: string

    /// <summary>
    /// Call direction
    /// Enum: Inbound, Outbound
    /// </summary>
    direction: string

    /// <summary>
    /// Phone number or extension number of a caller. For GCM transport type '_from' property should be used
    /// </summary>
    from: string

    /// <summary>
    /// Name of a caller
    /// </summary>
    fromName: string

    /// <summary>
    /// Phone number or extension number of a callee
    /// </summary>
    to: string

    /// <summary>
    /// Name of a callee
    /// </summary>
    toName: string

    /// <summary>
    /// Time when the call is actually started
    /// </summary>
    startTime: string

    /// <summary>
    /// Telephony call status
    /// Enum: NoCall, CallConnected, Ringing, OnHold, ParkedCall
    /// </summary>
    telephonyStatus: string

    /// <summary>
    /// Internal identifier of a call session
    /// </summary>
    sessionId: string

    /// <summary>
    /// Type of call termination. Supported for calls in 'NoCall' status. If the returned termination type is 'intermediate' it means the call is not actually ended, the connection is established on one of the devices
    /// Enum: final, intermediate
    /// </summary>
    terminationType: string
}

export default ActiveCallInfoWithoutSIP