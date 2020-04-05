import DetailedCallInfo from './DetailedCallInfo'
import PrimaryCQInfo from './PrimaryCQInfo'
import AdditionalCQInfo from './AdditionalCQInfo'

class ActiveCallInfo
{
    /// <summary>
    /// </summary>
    id: string

    /// <summary>
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
    /// </summary>
    telephonyStatus: string

    /// <summary>
    /// </summary>
    sipData: DetailedCallInfo

    /// <summary>
    /// </summary>
    sessionId: string

    /// <summary>
    /// </summary>
    terminationType: string

    /// <summary>
    /// Primary call session information. Supported for Call Queues only
    /// </summary>
    primary: PrimaryCQInfo

    /// <summary>
    /// Additional call session information. Supported for Call Queues only
    /// </summary>
    additional: AdditionalCQInfo
}

export default ActiveCallInfo