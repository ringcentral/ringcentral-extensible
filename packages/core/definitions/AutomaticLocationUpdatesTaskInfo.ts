import {TaskResultInfo} from '.';

class AutomaticLocationUpdatesTaskInfo {
  /**
   * Internal identifier of a task
   */
  id?: string;

  /**
   * Status of a task
   */
  status?: 'Accepted' | 'InProgress' | 'Completed' | 'Failed';

  /**
   * Task creation time
   */
  creationTime?: string;

  /**
   * Time of the task latest modification
   */
  lastModifiedTime?: string;

  /**
   * Type of a task
   */
  type?:
    | 'WirelessPointsBulkCreate'
    | 'WirelessPointsBulkUpdate'
    | 'SwitchesBulkCreate'
    | 'SwitchesBulkUpdate';

  /**
   * Task detailed result. Returned for failed and completed tasks
   */
  result?: TaskResultInfo;
}

export default AutomaticLocationUpdatesTaskInfo;
