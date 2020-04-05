class ListChatTasksParameters
{
    /// <summary>
    /// The end datetime for resulting records in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, e.g. 2019-03-10T18:23:45Z
    /// Default: now
    /// </summary>
    creationTimeTo: string

    /// <summary>
    /// The start datetime for resulting records in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format including timezone, e.g. 2016-02-23T00:00:00
    /// </summary>
    creationTimeFrom: string

    /// <summary>
    /// Internal identifier of a task creator
    /// </summary>
    creatorId: string[]

    /// <summary>
    /// Task execution status
    /// </summary>
    status: string[]

    /// <summary>
    /// Task assignment status
    /// Enum: Unassigned, Assigned
    /// </summary>
    assignmentStatus: string

    /// <summary>
    /// Internal identifier of a task assignee
    /// </summary>
    assigneeId: string[]

    /// <summary>
    /// Task execution status by assignee(-s) specified in assigneeId
    /// Enum: Pending, Completed
    /// </summary>
    assigneeStatus: string

    /// <summary>
    /// Token of the current page. If token is omitted then the first page should be returned
    /// </summary>
    pageToken: string

    /// <summary>
    /// Number of records to be returned per screen
    /// Maximum: 250
    /// Minimum: 1
    /// Default: 30
    /// </summary>
    recordCount: number
}

export default ListChatTasksParameters