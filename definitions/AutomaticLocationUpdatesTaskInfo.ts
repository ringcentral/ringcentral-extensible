import TaskResultInfo from './TaskResultInfo'

class AutomaticLocationUpdatesTaskInfo
{
    /**
     * Internal identifier of a task
     */
    id?: string

    /**
     * Status of a task
     * Enum: Accepted, InProgress, Completed, Failed
     */
    status?: string

    /**
     * Task creation time
     */
    creationTime?: string

    /**
     * Time of the task latest modification
     */
    lastModifiedTime?: string

    /**
     * Type of a task
     * Enum: WirelessPointsBulkCreate, WirelessPointsBulkUpdate, SwitchesBulkCreate, SwitchesBulkUpdate
     */
    type?: string

    /**
     * Task detailed result. Returned for failed and completed tasks
     */
    result?: TaskResultInfo
}

export default AutomaticLocationUpdatesTaskInfo