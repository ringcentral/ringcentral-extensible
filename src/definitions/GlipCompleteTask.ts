import GlipCompleteTaskAssignee from './GlipCompleteTaskAssignee'

class GlipCompleteTask
{
  /**
   * Completeness status. 'Mandatory' if `completenessCondition` is set to `Simple`, otherwise 'Optional'
   * Enum: Incomplete, Complete
   */
  status?: string

  /**
   */
  assignees?: GlipCompleteTaskAssignee[]

  /**
   * Current completeness percentage of a task with the 'Percentage' completeness condition. 'Mandatory' if `completenessCondition` is set to `Percentage`, otherwise 'Optional'
   * Maximum: 100
   */
  completenessPercentage?: number
}

export default GlipCompleteTask
