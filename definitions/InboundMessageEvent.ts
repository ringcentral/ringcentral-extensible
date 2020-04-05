import NotificationInfo from './NotificationInfo'

class InboundMessageEvent
{
    /**
     * Information on a notification
     */
    aps?: NotificationInfo

    /**
     * Internal identifier of a message
     */
    messageId?: string

    /**
     * Internal identifier of an conversation
     */
    conversationId?: string

    /**
     * Sender phone number. For GCM transport type '_from' property should be used
     */
    from?: string

    /**
     * Receiver phone number
     */
    to?: string

    /**
     * Internal identifier of a subscription owner extension
     */
    ownerId?: string
}

export default InboundMessageEvent