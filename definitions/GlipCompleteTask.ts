import GlipCompleteTaskAssignee from './GlipCompleteTaskAssignee'

class GlipCompleteTask
{
    /// <summary>
    /// Completeness status. 'Mandatory' if `completenessCondition` is set to `Simple`, otherwise 'Optional'
    /// Enum: Incomplete, Complete
    /// </summary>
    status: string

    /// <summary>
    /// </summary>
    assignees: GlipCompleteTaskAssignee[]

    /// <summary>
    /// Current completeness percentage of a task with the 'Percentage' completeness condition. 'Mandatory' if `completenessCondition` is set to `Percentage`, otherwise 'Optional'
    /// Maximum: 100
    /// </summary>
    completenessPercentage: number
}

export default GlipCompleteTask