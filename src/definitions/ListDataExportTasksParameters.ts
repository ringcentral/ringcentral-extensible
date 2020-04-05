class ListDataExportTasksParameters
{
    /**
     * Status of the task(s) to be returned. Multiple values supported
     * Enum: Accepted, InProgress, Completed, Failed, Canceled
     */
    status?: string

    /**
     * Page number to be retrieved; value range is > 0
     * Default: 1
     */
    page?: number

    /**
     * Number of records to be returned per page; value range is 1 - 250
     * Default: 30
     */
    perPage?: number
}

export default ListDataExportTasksParameters