import NotificationRecipientInfo from './NotificationRecipientInfo'
import SenderInfo from './SenderInfo'
import MessageAttachmentInfo from './MessageAttachmentInfo'

class VoicemailMessageEventBody
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
    /// Message sender information
    /// </summary>
    from: SenderInfo

    /// <summary>
    /// Type of a message
    /// Enum: Voicemail
    /// </summary>
    type: string

    /// <summary>
    /// Message creation datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example *2019-03-10T18:07:52.534Z*
    /// </summary>
    creationTime: string

    /// <summary>
    /// Datetime when the message was modified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example *2019-03-10T18:07:52.534Z*
    /// </summary>
    lastModifiedTime: string

    /// <summary>
    /// Status of a message
    /// Default: Unread
    /// </summary>
    readStatus: string

    /// <summary>
    /// Message priority
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
    /// Enum: Inbound, Outbound
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
    /// Internal identifier of a conversation this message belongs to
    /// </summary>
    conversationId: string

    /// <summary>
    /// Specifies if a voicemail message transcription is already completed or not
    /// </summary>
    vmTranscriptionStatus: string
}

export default VoicemailMessageEventBody