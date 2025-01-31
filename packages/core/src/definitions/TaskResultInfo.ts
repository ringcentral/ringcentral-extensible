import TaskResultRecord from "./TaskResultRecord.js";

/**
 * Task detailed result. Returned for failed and completed tasks
 */
interface TaskResultInfo {
  /**
   * Detailed task results by elements from initial request
   */
  records?: TaskResultRecord[];
}

export default TaskResultInfo;
