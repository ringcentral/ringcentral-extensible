import type TMTaskInfoCreator from './TMTaskInfoCreator';
import type TMTaskInfoAssignees from './TMTaskInfoAssignees';
import type TaskRecurrenceInfo from './TaskRecurrenceInfo';
import type TaskAttachment from './TaskAttachment';

interface TMTaskInfo {
  /**
   * Internal identifier of a task
   */
  id?: string;

  /**
   * Task creation date/time in UTC time zone
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Task the last modified time in UTC time zone
   * Format: date-time
   */
  lastModifiedTime?: string;

  /**
   * Task type
   */
  type?: 'Task';

  /**
   */
  creator?: TMTaskInfoCreator;

  /**
   * Internal identifiers of the chats where the task is posted or shared
   */
  chatIds?: string[];

  /**
   * Task execution status
   */
  status?: 'Pending' | 'InProgress' | 'Completed';

  /**
   * Task name/subject
   */
  subject?: string;

  /**
   * Task name/subject
   */
  assignees?: TMTaskInfoAssignees[];

  /**
   * How the task completeness should be determined
   */
  completenessCondition?: 'Simple' | 'AllAssignees' | 'Percentage';

  /**
   * Current completeness percentage of the task with the specified percentage completeness condition
   * Maximum: 100
   * Format: int32
   */
  completenessPercentage?: number;

  /**
   * Task start date
   * Format: date-time
   */
  startDate?: string;

  /**
   * Task due date/time
   * Format: date-time
   */
  dueDate?: string;

  /**
   * Font color of a post with the current task
   */
  color?: 'Black' | 'Red' | 'Orange' | 'Yellow' | 'Green' | 'Blue' | 'Purple' | 'Magenta';

  /**
   * Task section to group / search by
   */
  section?: string;

  /**
   * Task details
   */
  description?: string;

  /**
   */
  recurrence?: TaskRecurrenceInfo;

  /**
   */
  attachments?: TaskAttachment[];
}

export default TMTaskInfo;
