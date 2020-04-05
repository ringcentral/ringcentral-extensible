import GlipTaskInfoCreator from './GlipTaskInfoCreator'
import GlipTaskInfoAssignee from './GlipTaskInfoAssignee'
import GlipTaskRecurrenceInfo from './GlipTaskRecurrenceInfo'
import TaskAttachment from './TaskAttachment'

class GlipTaskInfo
{
    /// <summary>
    /// Internal identifier of a task
    /// </summary>
    id: string

    /// <summary>
    /// Datetime of the task creation in UTC time zone.
    /// </summary>
    creationTime: string

    /// <summary>
    /// Datetime of the last modification of the task in UTC time zone.
    /// </summary>
    lastModifiedTime: string

    /// <summary>
    /// Type of a task
    /// Enum: Task
    /// </summary>
    type: string

    /// <summary>
    /// </summary>
    creator: GlipTaskInfoCreator

    /// <summary>
    /// Chat IDs where the task is posted or shared.
    /// </summary>
    chatIds: string[]

    /// <summary>
    /// Status of task execution
    /// Enum: Pending, InProgress, Completed
    /// </summary>
    status: string

    /// <summary>
    /// Name/subject of a task
    /// </summary>
    subject: string

    /// <summary>
    /// Task name/subject
    /// </summary>
    assignees: GlipTaskInfoAssignee[]

    /// <summary>
    /// Specifies how to determine task completeness
    /// Enum: Simple, AllAssignees, Percentage
    /// </summary>
    completenessCondition: string

    /// <summary>
    /// Current completeness percentage of the task with the specified percentage completeness condition
    /// Maximum: 100
    /// </summary>
    completenessPercentage: number

    /// <summary>
    /// Task start date
    /// </summary>
    startDate: string

    /// <summary>
    /// Task due date/time
    /// </summary>
    dueDate: string

    /// <summary>
    /// Font color of a post with the current task
    /// Enum: Black, Red, Orange, Yellow, Green, Blue, Purple, Magenta
    /// </summary>
    color: string

    /// <summary>
    /// Task section to group/search by
    /// </summary>
    section: string

    /// <summary>
    /// Task details
    /// </summary>
    description: string

    /// <summary>
    /// </summary>
    recurrence: GlipTaskRecurrenceInfo

    /// <summary>
    /// </summary>
    attachments: TaskAttachment[]
}

export default GlipTaskInfo