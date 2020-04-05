class BulkTaskInfo
{
    /// <summary>
    /// Internal identifier of a task for multiple switches creation
    /// </summary>
    id: string

    /// <summary>
    /// Status of a task
    /// Enum: Accepted, Failed
    /// </summary>
    status: string

    /// <summary>
    /// Task creation time
    /// </summary>
    creationTime: string

    /// <summary>
    /// Time of the task latest modification
    /// </summary>
    lastModifiedTime: string
}

export default BulkTaskInfo