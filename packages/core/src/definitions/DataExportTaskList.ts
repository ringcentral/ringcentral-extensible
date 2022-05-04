import DataExportTask from './DataExportTask';
import GlipDataExportNavigationInfo from './GlipDataExportNavigationInfo';
import GlipDataExportPagingInfo from './GlipDataExportPagingInfo';

class DataExportTaskList {
  /**
   */
  tasks?: DataExportTask[];

  /**
   */
  navigation?: GlipDataExportNavigationInfo;

  /**
   */
  paging?: GlipDataExportPagingInfo;
}

export default DataExportTaskList;
