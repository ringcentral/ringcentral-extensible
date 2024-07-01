import type TMCreateTaskRequestAssignees from './TMCreateTaskRequestAssignees';
import type TaskRecurrenceInfo from './TaskRecurrenceInfo';
import type TMAttachmentInfo from './TMAttachmentInfo';

interface TMCreateTaskRequest {
  /**
   * Task name/subject. Max allowed length is 250 characters
   * Required
   */
  subject?: string;

  /**
   * Required
   */
  assignees?: TMCreateTaskRequestAssignees[];

  /**
   * Default: Simple
   */
  completenessCondition?: 'Simple' | 'AllAssignees' | 'Percentage';

  /**
   * Task start date in UTC time zone.
   * Format: date-time
   */
  startDate?: string;

  /**
   * Task due date/time in UTC time zone.
   * Format: date-time
   */
  dueDate?: string;

  /**
   * Default: Black
   */
  color?: 'Black' | 'Red' | 'Orange' | 'Yellow' | 'Green' | 'Blue' | 'Purple' | 'Magenta';

  /**
   * Task section to group / search by. Max allowed length is 100 characters.
   */
  section?: string;

  /**
   * Task details. Max allowed length is 102400 characters (100kB).
   */
  description?: string;

  /**
   */
  recurrence?: TaskRecurrenceInfo;

  /**
   */
  attachments?: TMAttachmentInfo[];
}

export default TMCreateTaskRequest;
