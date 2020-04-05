import DataExportTaskContactInfo from './DataExportTaskContactInfo'

class SpecificInfo
{
    /// <summary>
    /// Starting time for data collection
    /// </summary>
    timeFrom: string

    /// <summary>
    /// Ending time for data collection
    /// </summary>
    timeTo: string

    /// <summary>
    /// </summary>
    contacts: DataExportTaskContactInfo[]

    /// <summary>
    /// List of chats from which the data (posts, files, tasks, events, notes, etc.) will be collected
    /// </summary>
    chatIds: string[]
}

export default SpecificInfo