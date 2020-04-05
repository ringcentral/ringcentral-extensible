class MessageChanges
{
    /// <summary>
    /// Message type
    /// Enum: Voicemail, SMS, Fax, Pager
    /// </summary>
    type: string

    /// <summary>
    /// The number of new messages. Can be omitted if the value is zero
    /// </summary>
    newCount: number

    /// <summary>
    /// The number of updated messages. Can be omitted if the value is zero
    /// </summary>
    updatedCount: number
}

export default MessageChanges