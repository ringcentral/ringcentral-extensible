import DataExportTask from "./DataExportTask.js";
import GlipDataExportNavigationInfo from "./GlipDataExportNavigationInfo.js";
import GlipDataExportPagingInfo from "./GlipDataExportPagingInfo.js";

interface DataExportTaskList {
  /** */
  tasks?: DataExportTask[];

  /** */
  navigation?: GlipDataExportNavigationInfo;

  /** */
  paging?: GlipDataExportPagingInfo;
}

export default DataExportTaskList;
