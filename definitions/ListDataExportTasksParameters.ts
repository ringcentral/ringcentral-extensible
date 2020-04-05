class ListDataExportTasksParameters
{
    /// <summary>
    /// Status of the task(s) to be returned. Multiple values supported
    /// Enum: Accepted, InProgress, Completed, Failed, Canceled
    /// </summary>
    status: string

    /// <summary>
    /// Page number to be retrieved; value range is > 0
    /// Default: 1
    /// </summary>
    page: number

    /// <summary>
    /// Number of records to be returned per page; value range is 1 - 250
    /// Default: 30
    /// </summary>
    perPage: number
}

export default ListDataExportTasksParameters