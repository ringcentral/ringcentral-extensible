import Attachment from './Attachment'
import MessageStoreCalleeInfoRequest from './MessageStoreCalleeInfoRequest'

class CreateFaxMessageRequest
{
    /// <summary>
    /// File to upload
    /// </summary>
    attachments: Attachment[]

    /// <summary>
    /// Resolution of Fax
    /// Enum: High, Low
    /// </summary>
    faxResolution: string

    /// <summary>
    /// To Phone Number
    /// </summary>
    to: MessageStoreCalleeInfoRequest[]

    /// <summary>
    /// Timestamp to send fax at. If not specified (current or the past), the fax is sent immediately
    /// </summary>
    sendTime: string

    /// <summary>
    /// ISO Code. e.g UK
    /// </summary>
    isoCode: string

    /// <summary>
    /// Cover page identifier. For the list of available cover page identifiers please call the method Fax Cover Pages. If not specified, the default cover page which is configured in 'Outbound Fax Settings' is attached
    /// </summary>
    coverIndex: number

    /// <summary>
    /// Cover page text, entered by the fax sender and printed on the cover page. Maximum length is limited to 1024 symbols
    /// </summary>
    coverPageText: string
}

export default CreateFaxMessageRequest