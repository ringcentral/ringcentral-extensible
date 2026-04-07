import type DataExportTask from "./DataExportTask.js";
import type GlipDataExportNavigationInfo from "./GlipDataExportNavigationInfo.js";
import type GlipDataExportPagingInfo from "./GlipDataExportPagingInfo.js";

interface DataExportTaskList {
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
