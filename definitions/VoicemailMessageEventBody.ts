import NotificationRecipientInfo from './NotificationRecipientInfo'
import SenderInfo from './SenderInfo'
import MessageAttachmentInfo from './MessageAttachmentInfo'

class VoicemailMessageEventBody
{
    /**
     * Internal identifier of a message
     */
    id?: string

    /**
     * Message receiver(s) information
     */
    to?: NotificationRecipientInfo[]

    /**
     * Message sender information
     */
    from?: SenderInfo

    /**
     * Type of a message
     * Enum: Voicemail
     */
    type?: string

    /**
     * Message creation datetime in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example *2019-03-10T18:07:52.534Z*
     */
    creationTime?: string

    /**
     * Datetime when the message was modified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, for example *2019-03-10T18:07:52.534Z*
     */
    lastModifiedTime?: string

    /**
     * Status of a message
     * Default: Unread
     */
    readStatus?: string

    /**
     * Message priority
     * Default: Normal
     */
    priority?: string

    /**
     * Message attachment data
     */
    attachments?: MessageAttachmentInfo[]

    /**
     * Message direction
     * Default: Inbound
     * Enum: Inbound, Outbound
     */
    direction?: string

    /**
     * Message availability status
     * Default: Alive
     */
    availability?: string

    /**
     * Message subject. It replicates message text which is also returned as an attachment
     */
    subject?: string

    /**
     * Status of a message
     * Default: Received
     */
    messageStatus?: string

    /**
     * Internal identifier of a conversation this message belongs to
     */
    conversationId?: string

    /**
     * Specifies if a voicemail message transcription is already completed or not
     */
    vmTranscriptionStatus?: string
}

export default VoicemailMessageEventBody