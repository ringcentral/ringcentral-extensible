import GlipUpdateTaskAssignee from './GlipUpdateTaskAssignee'
import GlipTaskRecurrenceInfo from './GlipTaskRecurrenceInfo'
import GlipUpdateTaskAttachment from './GlipUpdateTaskAttachment'

class GlipUpdateTask
{
    /// <summary>
    /// Task name/subject. Max allowed length is 250 characters.
    /// </summary>
    subject: string

    /// <summary>
    /// </summary>
    assignees: GlipUpdateTaskAssignee[]

    /// <summary>
    /// Enum: Simple, AllAssignees, Percentage
    /// </summary>
    completenessCondition: string

    /// <summary>
    /// Task start date in UTC time zone
    /// </summary>
    startDate: string

    /// <summary>
    /// Task due date/time in UTC time zone
    /// </summary>
    dueDate: string

    /// <summary>
    /// Enum: Black, Red, Orange, Yellow, Green, Blue, Purple, Magenta
    /// </summary>
    color: string

    /// <summary>
    /// Task section to group/search by. Max allowed legth is 100 characters
    /// </summary>
    section: string

    /// <summary>
    /// Task details. Max allowed legth is 102400 characters (100kB)
    /// </summary>
    description: string

    /// <summary>
    /// </summary>
    recurrence: GlipTaskRecurrenceInfo

    /// <summary>
    /// </summary>
    attachments: GlipUpdateTaskAttachment[]
}

export default GlipUpdateTask