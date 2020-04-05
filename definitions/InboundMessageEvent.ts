import NotificationInfo from './NotificationInfo'

class InboundMessageEvent
{
    /// <summary>
    /// Information on a notification
    /// </summary>
    aps: NotificationInfo

    /// <summary>
    /// Internal identifier of a message
    /// </summary>
    messageId: string

    /// <summary>
    /// Internal identifier of an conversation
    /// </summary>
    conversationId: string

    /// <summary>
    /// Sender phone number. For GCM transport type '_from' property should be used
    /// </summary>
    from: string

    /// <summary>
    /// Receiver phone number
    /// </summary>
    to: string

    /// <summary>
    /// Internal identifier of a subscription owner extension
    /// </summary>
    ownerId: string
}

export default InboundMessageEvent