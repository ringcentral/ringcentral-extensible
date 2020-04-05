import CallerInfoFrom from './CallerInfoFrom'
import CallerInfoTo from './CallerInfoTo'
import MessageAttachmentInfoIntId from './MessageAttachmentInfoIntId'

class FaxResponse
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
    /// Message type - 'Fax'
    /// </summary>
    type: string

    /// <summary>
    /// Sender information
    /// </summary>
    from: CallerInfoFrom

    /// <summary>
    /// Recipient information
    /// </summary>
    to: CallerInfoTo[]

    /// <summary>
    /// Message creation datetime in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
    /// </summary>
    creationTime: string

    /// <summary>
    /// Message read status
    /// Enum: Read, Unread
    /// </summary>
    readStatus: string

    /// <summary>
    /// Message priority
    /// Enum: Normal, High
    /// </summary>
    priority: string

    /// <summary>
    /// The list of message attachments
    /// </summary>
    attachments: MessageAttachmentInfoIntId[]

    /// <summary>
    /// Message direction
    /// Enum: Inbound, Outbound
    /// </summary>
    direction: string

    /// <summary>
    /// Message availability status. Message in 'Deleted' state is still preserved with all its attachments and can be restored. 'Purged' means that all attachments are already deleted and the message itself is about to be physically deleted shortly
    /// Enum: Alive, Deleted, Purged
    /// </summary>
    availability: string

    /// <summary>
    /// Message status. 'Queued' - the message is queued for sending; 'Sent' - a message is successfully sent; 'SendingFailed' - a message sending attempt has failed; 'Received' - a message is received (inbound messages have this status by default)
    /// Enum: Queued, Sent, SendingFailed, Received
    /// </summary>
    messageStatus: string

    /// <summary>
    /// Resolution of a fax message. ('High' for black and white image scanned at 200 dpi, 'Low' for black and white image scanned at 100 dpi)
    /// Enum: High, Low
    /// </summary>
    faxResolution: string

    /// <summary>
    /// Page count in a fax message
    /// </summary>
    faxPageCount: number

    /// <summary>
    /// Datetime when the message was modified on server in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z
    /// </summary>
    lastModifiedTime: string

    /// <summary>
    /// Cover page identifier. For the list of available cover page identifiers please call the Fax Cover Pages method
    /// </summary>
    coverIndex: number

    /// <summary>
    /// Cover page text, entered by the fax sender and printed on the cover page. Maximum length is limited to 1024 symbols
    /// </summary>
    coverPageText: string
}

export default FaxResponse