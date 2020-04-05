import FixedOrderAgents from './FixedOrderAgents'

class QueueInfo
{
    /**
     * Specifies how calls are transferred to group members
     * Enum: Rotating, Simultaneous, FixedOrder
     */
    transferMode: string

    /**
     * Information on a call forwarding rule
     */
    fixedOrderAgents: FixedOrderAgents[]

    /**
     * Connecting audio interruption mode
     * Enum: Never, WhenMusicEnds, Periodically
     */
    holdAudioInterruptionMode: string

    /**
     * Connecting audio interruption message period in seconds
     */
    holdAudioInterruptionPeriod: number

    /**
     * Specifies the type of action to be taken after the hold time (waiting for an available call queue member) expires. If 'TransferToExtension' option is selected, the extension specified in `transfer` field is used
     * Default: Voicemail
     * Enum: TransferToExtension, Voicemail
     */
    holdTimeExpirationAction: string

    /**
     * Maximum time in seconds to wait for a call queue member before trying the next member
     */
    agentTimeout: number

    /**
     * Minimum post-call wrap up time in seconds before agent status is automatically set; the value range is from 180 to 300
     */
    wrapUpTime: number

    /**
     * Maximum hold time in seconds to wait for an available call queue member
     */
    holdTime: number

    /**
     * Maximum count of callers on hold; the limitation is 25 callers
     */
    maxCallers: number

    /**
     * Action which should be taken if count of callers on hold exceeds the maximum
     * Enum: Voicemail, Announcement
     */
    maxCallersAction: string
}

export default QueueInfo