import type CreatorInfo from "./CreatorInfo";
import type SpecificInfo from "./SpecificInfo";
import type ExportTaskResultInfo from "./ExportTaskResultInfo";

interface DataExportTask {
  /**
   * Canonical URI of a task
   */
  uri?: string;

  /**
   * Internal identifier of a task
   */
  id?: string;

  /**
   * Task creation timestamp
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Task last modification timestamp
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   * Task status
   */
  status?: "Accepted" | "InProgress" | "Completed" | "Failed" | "Expired";

  /** */
  creator?: CreatorInfo;

  /** */
  specific?: SpecificInfo;

  /**
   * Data collection archives. Returned by task ID
   */
  datasets?: ExportTaskResultInfo[];
}

export default DataExportTask;
