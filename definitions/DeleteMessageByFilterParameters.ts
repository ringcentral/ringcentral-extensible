class DeleteMessageByFilterParameters
{
    /// <summary>
    /// </summary>
    conversationId: string[]

    /// <summary>
    /// Messages received earlier then the date specified will be deleted. The default value is current datetime
    /// </summary>
    dateTo: string

    /// <summary>
    /// Type of messages to be deleted
    /// Default: All
    /// Enum: Fax, SMS, VoiceMail, Pager, Text, All
    /// </summary>
    type: string
}

export default DeleteMessageByFilterParameters