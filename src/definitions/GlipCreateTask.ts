import GlipCreateTaskAssignee from './GlipCreateTaskAssignee'
import GlipTaskRecurrenceInfo from './GlipTaskRecurrenceInfo'
import GlipCreateTaskAttachment from './GlipCreateTaskAttachment'

class GlipCreateTask
{
  /**
   * Task name/subject. Max allowed length is 250 characters.
   * Required
   */
  subject?: string

  /**
   * Required
   */
  assignees?: GlipCreateTaskAssignee[]

  /**
   * Default: Simple
   * Enum: Simple, AllAssignees, Percentage
   */
  completenessCondition?: string

  /**
   * Task start date in UTC time zone.
   */
  startDate?: string

  /**
   * Task due date/time in UTC time zone.
   */
  dueDate?: string

  /**
   * Default: Black
   * Enum: Black, Red, Orange, Yellow, Green, Blue, Purple, Magenta
   */
  color?: string

  /**
   * Task section to group / search by. Max allowed legth is 100 characters.
   */
  section?: string

  /**
   * Task details. Max allowed legth is 102400 characters (100kB).
   */
  description?: string

  /**
   */
  recurrence?: GlipTaskRecurrenceInfo

  /**
   */
  attachments?: GlipCreateTaskAttachment[]
}

export default GlipCreateTask
