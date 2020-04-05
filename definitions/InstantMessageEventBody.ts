import NotificationRecipientInfo from './NotificationRecipientInfo'
import SenderInfo from './SenderInfo'
import MessageAttachmentInfo from './MessageAttachmentInfo'
import ConversationInfo from './ConversationInfo'

class InstantMessageEventBody
{
    /// <summary>
    /// Internal identifier of a message
    /// </summary>
    id: string

    /// <summary>
    /// Message receiver(s) information
    /// </summary>
    to: NotificationRecipientInfo[]

    /// <summary>
    /// Extension Type. For GCM transport type '_from' property should be used
    /// </summary>
    from: SenderInfo

    /// <summary>
    /// Type of a message. The default value is 'SMS'
    /// </summary>
    type: string

    /// <summary>
    /// Message creation datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
    /// </summary>
    creationTime: string

    /// <summary>
    /// Datetime when the message was modified in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
    /// </summary>
    lastModifiedTime: string

    /// <summary>
    /// Status of a message
    /// Default: Unread
    /// </summary>
    readStatus: string

    /// <summary>
    /// Default: Normal
    /// </summary>
    priority: string

    /// <summary>
    /// Message attachment data
    /// </summary>
    attachments: MessageAttachmentInfo[]

    /// <summary>
    /// Message direction
    /// Default: Inbound
    /// </summary>
    direction: string

    /// <summary>
    /// Message availability status
    /// Default: Alive
    /// </summary>
    availability: string

    /// <summary>
    /// Message subject. It replicates message text which is also returned as an attachment
    /// </summary>
    subject: string

    /// <summary>
    /// Status of a message
    /// Default: Received
    /// </summary>
    messageStatus: string

    /// <summary>
    /// Deprecated. Identifier of a conversation the message belongs to
    /// </summary>
    conversationId: string

    /// <summary>
    /// Information about a conversation the message belongs to
    /// </summary>
    conversation: ConversationInfo

    /// <summary>
    /// Internal identifier of a subscription owner extension
    /// </summary>
    ownerId: string
}

export default InstantMessageEventBody