import {TaskResultRecord} from './index';

/**
 * Task detailed result. Returned for failed and completed tasks
 */
class TaskResultInfo {
  /**
   * Detailed task results by elements from initial request
   */
  records?: TaskResultRecord[];
}
export default TaskResultInfo;
