import TaskResultInfo from './TaskResultInfo'

class AutomaticLocationUpdatesTaskInfo
{
    /// <summary>
    /// Internal identifier of a task
    /// </summary>
    id: string

    /// <summary>
    /// Status of a task
    /// Enum: Accepted, InProgress, Completed, Failed
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

    /// <summary>
    /// Type of a task
    /// Enum: WirelessPointsBulkCreate, WirelessPointsBulkUpdate, SwitchesBulkCreate, SwitchesBulkUpdate
    /// </summary>
    type: string

    /// <summary>
    /// Task detailed result. Returned for failed and completed tasks
    /// </summary>
    result: TaskResultInfo
}

export default AutomaticLocationUpdatesTaskInfo