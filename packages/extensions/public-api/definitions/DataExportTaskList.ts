import {
  DataExportTask,
  GlipDataExportNavigationInfo,
  GlipDataExportPagingInfo,
} from './index';

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
