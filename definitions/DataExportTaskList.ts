import DataExportTask from './DataExportTask'
import GlipDataExportNavigationInfo from './GlipDataExportNavigationInfo'
import GlipDataExportPagingInfo from './GlipDataExportPagingInfo'

class DataExportTaskList
{
    /// <summary>
    /// </summary>
    tasks: DataExportTask[]

    /// <summary>
    /// </summary>
    navigation: GlipDataExportNavigationInfo

    /// <summary>
    /// </summary>
    paging: GlipDataExportPagingInfo
}

export default DataExportTaskList