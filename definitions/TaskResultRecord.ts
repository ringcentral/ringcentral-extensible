import TaskResultRecordErrorsInfo from './TaskResultRecordErrorsInfo'

class TaskResultRecord
{
    /// <summary>
    /// Internal identifier of the created/updated element - wireless point or network switch
    /// </summary>
    id: string

    /// <summary>
    /// Unique 48-bit identifier of the wireless access point complying with MAC address conventions. Returned only for 'Wireless Points Bulk Create' tasks
    /// </summary>
    bssid: string

    /// <summary>
    /// Unique identifier of a network switch. Returned only for 'Switches Bulk Create' tasks
    /// </summary>
    chassisId: string

    /// <summary>
    /// Operation status
    /// </summary>
    status: string

    /// <summary>
    /// </summary>
    errors: TaskResultRecordErrorsInfo
}

export default TaskResultRecord