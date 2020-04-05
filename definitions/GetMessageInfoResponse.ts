import MessageAttachmentInfo from './MessageAttachmentInfo'
import ConversationInfo from './ConversationInfo'
import MessageStoreCallerInfoResponseFrom from './MessageStoreCallerInfoResponseFrom'
import MessageStoreCallerInfoResponseTo from './MessageStoreCallerInfoResponseTo'

class GetMessageInfoResponse
{
    /// <summary>
    /// Internal identifier of a message
    /// </summary>
    id: number

    /// <summary>
    /// Canonical URI of a message
    /// </summary>
    uri: string

    /// <summary>
    /// The list of message attachments
    /// </summary>
    attachments: MessageAttachmentInfo[]

    /// <summary>
    /// Message availability status. Message in 'Deleted' state is still preserved with all its attachments and can be restored. 'Purged' means that all attachments are already deleted and the message itself is about to be physically deleted shortly
    /// Enum: Alive, Deleted, Purged
    /// </summary>
    availability: string

    /// <summary>
    /// SMS and Pager only. Identifier of a conversation the message belongs to
    /// </summary>
    conversationId: number

    /// <summary>
    /// SMS and Pager only. Identifier of a conversation the message belongs to
    /// </summary>
    conversation: ConversationInfo

    /// <summary>
    /// Message creation datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
    /// </summary>
    creationTime: string

    /// <summary>
    /// SMS only. Delivery error code returned by gateway
    /// </summary>
    deliveryErrorCode: string

    /// <summary>
    /// Message direction. Note that for some message types not all directions are allowed. For example voicemail messages can be only inbound
    /// Enum: Inbound, Outbound
    /// </summary>
    direction: string

    /// <summary>
    /// Fax only. Page count in a fax message
    /// </summary>
    faxPageCount: number

    /// <summary>
    /// Fax only. Resolution of a fax message. 'High' for black and white image scanned at 200 dpi, 'Low' for black and white image scanned at 100 dpi
    /// Enum: High, Low
    /// </summary>
    faxResolution: string

    /// <summary>
    /// Sender information
    /// </summary>
    from: MessageStoreCallerInfoResponseFrom

    /// <summary>
    /// The datetime when the message was modified on server in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
    /// </summary>
    lastModifiedTime: string

    /// <summary>
    /// Message status. Different message types may have different allowed status values. For outbound faxes the aggregated message status is returned: If status for at least one recipient is 'Queued', then 'Queued' value is returned If status for at least one recipient is 'SendingFailed', then 'SendingFailed' value is returned In other cases Sent status is returned
    /// Enum: Queued, Sent, Delivered, DeliveryFailed, SendingFailed, Received
    /// </summary>
    messageStatus: string

    /// <summary>
    /// 'Pager' only. 'True' if at least one of the message recipients is 'Department' extension
    /// </summary>
    pgToDepartment: boolean

    /// <summary>
    /// Message priority
    /// Enum: Normal, High
    /// </summary>
    priority: string

    /// <summary>
    /// Message read status
    /// Enum: Read, Unread
    /// </summary>
    readStatus: string

    /// <summary>
    /// SMS only. The datetime when outbound SMS was delivered to recipient's handset in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. It is filled only if the carrier sends a delivery receipt to RingCentral
    /// </summary>
    smsDeliveryTime: string

    /// <summary>
    /// SMS only. Number of attempts made to send an outbound SMS to the gateway (if gateway is temporary unavailable)
    /// </summary>
    smsSendingAttemptsCount: number

    /// <summary>
    /// Message subject. For SMS and Pager messages it replicates message text which is also returned as an attachment
    /// </summary>
    subject: string

    /// <summary>
    /// Recipient information
    /// </summary>
    to: MessageStoreCallerInfoResponseTo[]

    /// <summary>
    /// Message type
    /// Enum: Fax, SMS, VoiceMail, Pager, Text
    /// </summary>
    type: string

    /// <summary>
    /// Voicemail only. Status of voicemail to text transcription. If VoicemailToText feature is not activated for account, the 'NotAvailable' value is returned
    /// Enum: NotAvailable, InProgress, TimedOut, Completed, CompletedPartially, Failed, Unknown
    /// </summary>
    vmTranscriptionStatus: string

    /// <summary>
    /// Cover page identifier. For the list of available cover page identifiers please call the Fax Cover Pages method
    /// </summary>
    coverIndex: number

    /// <summary>
    /// Cover page text, entered by the fax sender and printed on the cover page. Maximum length is limited to 1024 symbols
    /// </summary>
    coverPageText: string
}

export default GetMessageInfoResponse