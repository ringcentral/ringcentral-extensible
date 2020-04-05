class MessageStoreReport
{
    /// <summary>
    /// Internal identifier of a message store report task
    /// </summary>
    id: string

    /// <summary>
    /// Link to a task
    /// </summary>
    uri: string

    /// <summary>
    /// Status of a message store report task
    /// Enum: Accepted, Pending, InProgress, AttemptFailed, Failed, Completed, Cancelled
    /// </summary>
    status: string

    /// <summary>
    /// Internal identifier of an account
    /// </summary>
    accountId: string

    /// <summary>
    /// Internal identifier of an extension
    /// </summary>
    extensionId: string

    /// <summary>
    /// Task creation time
    /// </summary>
    creationTime: string

    /// <summary>
    /// Time of the last task modification
    /// </summary>
    lastModifiedTime: string

    /// <summary>
    /// Ending time for collecting messages
    /// </summary>
    dateTo: string

    /// <summary>
    /// Starting time for collecting messages
    /// </summary>
    dateFrom: string
}

export default MessageStoreReport