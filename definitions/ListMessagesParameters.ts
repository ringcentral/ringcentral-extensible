class ListMessagesParameters
{
    /// <summary>
    /// Specifies the availability status for the resulting messages. Multiple values are accepted
    /// </summary>
    availability: string[]

    /// <summary>
    /// Specifies the conversation identifier for the resulting messages
    /// </summary>
    conversationId: number

    /// <summary>
    /// The start datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is dateTo minus 24 hours
    /// </summary>
    dateFrom: string

    /// <summary>
    /// The end datetime for resulting messages in ISO 8601 format including timezone, for example 2016-03-10T18:07:52.534Z. The default value is current time
    /// </summary>
    dateTo: string

    /// <summary>
    /// The direction for the resulting messages. If not specified, both inbound and outbound messages are returned. Multiple values are accepted
    /// </summary>
    direction: string[]

    /// <summary>
    /// If 'True', then the latest messages per every conversation ID are returned
    /// </summary>
    distinctConversations: boolean

    /// <summary>
    /// The type of the resulting messages. If not specified, all messages without message type filtering are returned. Multiple values are accepted
    /// </summary>
    messageType: string[]

    /// <summary>
    /// The read status for the resulting messages. Multiple values are accepted
    /// </summary>
    readStatus: string[]

    /// <summary>
    /// Indicates the page number to retrieve. Only positive number values are accepted
    /// Default: 1
    /// </summary>
    page: number

    /// <summary>
    /// Indicates the page size (number of items)
    /// Default: 100
    /// </summary>
    perPage: number

    /// <summary>
    /// The phone number. If specified, messages are returned for this particular phone number only
    /// </summary>
    phoneNumber: string
}

export default ListMessagesParameters