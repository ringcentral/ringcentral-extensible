import GlipTaskInfoCreator from './GlipTaskInfoCreator'
import GlipTaskInfoAssignee from './GlipTaskInfoAssignee'
import GlipTaskRecurrenceInfo from './GlipTaskRecurrenceInfo'
import TaskAttachment from './TaskAttachment'

class GlipTaskInfo
{
    /**
     * Internal identifier of a task
     */
    id: string

    /**
     * Datetime of the task creation in UTC time zone.
     */
    creationTime: string

    /**
     * Datetime of the last modification of the task in UTC time zone.
     */
    lastModifiedTime: string

    /**
     * Type of a task
     * Enum: Task
     */
    type: string

    /**
     */
    creator: GlipTaskInfoCreator

    /**
     * Chat IDs where the task is posted or shared.
     */
    chatIds: string[]

    /**
     * Status of task execution
     * Enum: Pending, InProgress, Completed
     */
    status: string

    /**
     * Name/subject of a task
     */
    subject: string

    /**
     * Task name/subject
     */
    assignees: GlipTaskInfoAssignee[]

    /**
     * Specifies how to determine task completeness
     * Enum: Simple, AllAssignees, Percentage
     */
    completenessCondition: string

    /**
     * Current completeness percentage of the task with the specified percentage completeness condition
     * Maximum: 100
     */
    completenessPercentage: number

    /**
     * Task start date
     */
    startDate: string

    /**
     * Task due date/time
     */
    dueDate: string

    /**
     * Font color of a post with the current task
     * Enum: Black, Red, Orange, Yellow, Green, Blue, Purple, Magenta
     */
    color: string

    /**
     * Task section to group/search by
     */
    section: string

    /**
     * Task details
     */
    description: string

    /**
     */
    recurrence: GlipTaskRecurrenceInfo

    /**
     */
    attachments: TaskAttachment[]
}

export default GlipTaskInfo