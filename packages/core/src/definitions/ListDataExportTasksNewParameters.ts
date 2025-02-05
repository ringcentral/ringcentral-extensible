/**
 * Query parameters for operation listDataExportTasksNew
 */
interface ListDataExportTasksNewParameters {
  /**
   * Status of the task(s) to be returned. Multiple values are supported
   */
  status?: "Accepted" | "InProgress" | "Completed" | "Failed" | "Expired";

  /**
   * Page number to be retrieved; value range is > 0
   * Format: int32
   * Default: 1
   */
  page?: number;

  /**
   * Number of records to be returned per page; value range is 1 - 250
   * Format: int32
   * Default: 30
   */
  perPage?: number;
}

export default ListDataExportTasksNewParameters;
