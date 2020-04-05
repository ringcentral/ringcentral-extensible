import SpecificInfo from './SpecificInfo'
import ExportTaskResultInfo from './ExportTaskResultInfo'

class DataExportTask
{
    /**
     * Canonical URI of a task
     */
    uri: string

    /**
     * Internal identifier of a task
     */
    id: string

    /**
     * Task creation datetime
     */
    creationTime: string

    /**
     * Task last modification datetime
     */
    lastModifiedTime: string

    /**
     * Task status
     * Enum: Accepted, InProgress, Completed, Failed, Canceled
     */
    status: string

    /**
     * Internal identifier of a user
     */
    creator: string

    /**
     * Information specififed in request
     */
    specific: SpecificInfo

    /**
     * Data collection sets. Returned by task ID
     */
    datasets: ExportTaskResultInfo[]
}

export default DataExportTask