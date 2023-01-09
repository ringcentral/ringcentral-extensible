import TMUpdateTaskRequestAssignees from './TMUpdateTaskRequestAssignees';
import TMUpdateTaskRequestRecurrence from './TMUpdateTaskRequestRecurrence';
import TMAttachmentInfo from './TMAttachmentInfo';

interface TMUpdateTaskRequest {
  /**
   * Task name/subject. Max allowed length is 250 characters.
   */
  subject?: string;

  /**
   */
  assignees?: TMUpdateTaskRequestAssignees[];

  /**
   */
  completenessCondition?: ('Simple' | 'AllAssignees' | 'Percentage');

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
   */
  color?: ('Black' | 'Red' | 'Orange' | 'Yellow' | 'Green' | 'Blue' | 'Purple' | 'Magenta');

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
  recurrence?: TMUpdateTaskRequestRecurrence;

  /**
   */
  attachments?: TMAttachmentInfo[];
}

export default TMUpdateTaskRequest;
