import PagerCallerInfoRequest from './PagerCallerInfoRequest'

class CreateInternalTextMessageRequest
{
    /// <summary>
    /// Sender of a pager message.
    /// Required
    /// </summary>
    from: PagerCallerInfoRequest

    /// <summary>
    /// Internal identifier of a message this message replies to
    /// </summary>
    replyOn: number

    /// <summary>
    /// Text of a pager message. Max length is 1024 symbols (2-byte UTF-16 encoded). If a character is encoded in 4 bytes in UTF-16 it is treated as 2 characters, thus restricting the maximum message length to 512 symbols
    /// Required
    /// </summary>
    text: string

    /// <summary>
    /// Optional if replyOn parameter is specified. Receiver of a pager message.
    /// </summary>
    to: PagerCallerInfoRequest[]
}

export default CreateInternalTextMessageRequest