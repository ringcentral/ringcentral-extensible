import FixedOrderAgents from './FixedOrderAgents'

class QueueInfo
{
    /// <summary>
    /// Specifies how calls are transferred to group members
    /// Enum: Rotating, Simultaneous, FixedOrder
    /// </summary>
    transferMode: string

    /// <summary>
    /// Information on a call forwarding rule
    /// </summary>
    fixedOrderAgents: FixedOrderAgents[]

    /// <summary>
    /// Connecting audio interruption mode
    /// Enum: Never, WhenMusicEnds, Periodically
    /// </summary>
    holdAudioInterruptionMode: string

    /// <summary>
    /// Connecting audio interruption message period in seconds
    /// </summary>
    holdAudioInterruptionPeriod: number

    /// <summary>
    /// Specifies the type of action to be taken after the hold time (waiting for an available call queue member) expires. If 'TransferToExtension' option is selected, the extension specified in `transfer` field is used
    /// Default: Voicemail
    /// Enum: TransferToExtension, Voicemail
    /// </summary>
    holdTimeExpirationAction: string

    /// <summary>
    /// Maximum time in seconds to wait for a call queue member before trying the next member
    /// </summary>
    agentTimeout: number

    /// <summary>
    /// Minimum post-call wrap up time in seconds before agent status is automatically set; the value range is from 180 to 300
    /// </summary>
    wrapUpTime: number

    /// <summary>
    /// Maximum hold time in seconds to wait for an available call queue member
    /// </summary>
    holdTime: number

    /// <summary>
    /// Maximum count of callers on hold; the limitation is 25 callers
    /// </summary>
    maxCallers: number

    /// <summary>
    /// Action which should be taken if count of callers on hold exceeds the maximum
    /// Enum: Voicemail, Announcement
    /// </summary>
    maxCallersAction: string
}

export default QueueInfo