import { GlipUpdateTaskAssignee, GlipTaskRecurrenceInfo, GlipUpdateTaskAttachment } from '.'

class GlipUpdateTask
{
  /**
   * Task name/subject. Max allowed length is 250 characters.
   */
  subject?: string

  /**
   */
  assignees?: GlipUpdateTaskAssignee[]

  /**
   */
  completenessCondition?: ('Simple' | 'AllAssignees' | 'Percentage')

  /**
   * Task start date in UTC time zone
   */
  startDate?: string

  /**
   * Task due date/time in UTC time zone
   */
  dueDate?: string

  /**
   */
  color?: ('Black' | 'Red' | 'Orange' | 'Yellow' | 'Green' | 'Blue' | 'Purple' | 'Magenta')

  /**
   * Task section to group/search by. Max allowed legth is 100 characters
   */
  section?: string

  /**
   * Task details. Max allowed legth is 102400 characters (100kB)
   */
  description?: string

  /**
   */
  recurrence?: GlipTaskRecurrenceInfo

  /**
   */
  attachments?: GlipUpdateTaskAttachment[]
}

export default GlipUpdateTask
