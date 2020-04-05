import APSInfo from './APSInfo'

class IncomingCallEvent
{
    /// <summary>
    /// Apple Push Notification Service Info
    /// </summary>
    aps: APSInfo

    /// <summary>
    /// Event filter URI
    /// </summary>
    event: string

    /// <summary>
    /// Universally unique identifier of a notification
    /// </summary>
    uuid: string

    /// <summary>
    /// Internal identifier of a subscription
    /// </summary>
    subscriptionId: string

    /// <summary>
    /// The datetime of a call action in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example 2016-03-10T18:07:52.534Z
    /// </summary>
    timestamp: string

    /// <summary>
    /// Internal identifier of an extension
    /// Default: ~
    /// </summary>
    extensionId: string

    /// <summary>
    /// Calling action, for example 'StartRing'
    /// </summary>
    action: string

    /// <summary>
    /// Identifier of a call session
    /// </summary>
    sessionId: string

    /// <summary>
    /// Identifier of a server
    /// </summary>
    serverId: string

    /// <summary>
    /// Phone number of a caller. For GCM transport type '_from' property should be used
    /// </summary>
    from: string

    /// <summary>
    /// Caller name
    /// </summary>
    fromName: string

    /// <summary>
    /// Phone number of a callee
    /// </summary>
    to: string

    /// <summary>
    /// Callee name
    /// </summary>
    toName: string

    /// <summary>
    /// Unique identifier of a session
    /// </summary>
    sid: string

    /// <summary>
    /// SIP proxy registration name
    /// </summary>
    toUrl: string

    /// <summary>
    /// User data
    /// </summary>
    srvLvl: string

    /// <summary>
    /// User data
    /// </summary>
    srvLvlExt: string

    /// <summary>
    /// File containing recorded caller name
    /// </summary>
    recUrl: string

    /// <summary>
    /// Notification lifetime value in seconds, the default value is 30 seconds
    /// </summary>
    pn_ttl: number

    /// <summary>
    /// Internal identifier of a subscription owner extension
    /// </summary>
    ownerId: string
}

export default IncomingCallEvent