import {
  DataExportTask,
  GlipDataExportNavigationInfo,
  GlipDataExportPagingInfo,
} from '.';

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
