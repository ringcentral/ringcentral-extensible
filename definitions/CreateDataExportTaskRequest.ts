import DataExportTaskContactInfo from './DataExportTaskContactInfo'

class CreateDataExportTaskRequest
{
    /// <summary>
    /// Starting time for data collection. The default value is `timeTo` minus 24 hours. Max allowed time frame between `timeFrom` and `timeTo` is 6 months
    /// </summary>
    timeFrom: string

    /// <summary>
    /// Ending time for data collection. The default value is current time. Max allowed time frame between `timeFrom` and `timeTo` is 6 months
    /// </summary>
    timeTo: string

    /// <summary>
    /// </summary>
    contacts: DataExportTaskContactInfo[]

    /// <summary>
    /// List of chats from which the data (posts, files, tasks, events, notes, etc.) will be collected. Maximum number of chats supported is 10
    /// </summary>
    chatIds: string[]
}

export default CreateDataExportTaskRequest