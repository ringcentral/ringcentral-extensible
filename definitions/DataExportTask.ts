import SpecificInfo from './SpecificInfo'
import ExportTaskResultInfo from './ExportTaskResultInfo'

class DataExportTask
{
    /// <summary>
    /// Canonical URI of a task
    /// </summary>
    uri: string

    /// <summary>
    /// Internal identifier of a task
    /// </summary>
    id: string

    /// <summary>
    /// Task creation datetime
    /// </summary>
    creationTime: string

    /// <summary>
    /// Task last modification datetime
    /// </summary>
    lastModifiedTime: string

    /// <summary>
    /// Task status
    /// Enum: Accepted, InProgress, Completed, Failed, Canceled
    /// </summary>
    status: string

    /// <summary>
    /// Internal identifier of a user
    /// </summary>
    creator: string

    /// <summary>
    /// Information specififed in request
    /// </summary>
    specific: SpecificInfo

    /// <summary>
    /// Data collection sets. Returned by task ID
    /// </summary>
    datasets: ExportTaskResultInfo[]
}

export default DataExportTask