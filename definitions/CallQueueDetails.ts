import CallQueueServiceLevelSettings from './CallQueueServiceLevelSettings'

class CallQueueDetails
{
    /// <summary>
    /// Internal identifier of a call queue
    /// </summary>
    id: string

    /// <summary>
    /// Call queue name
    /// </summary>
    name: string

    /// <summary>
    /// Call queue extension number
    /// </summary>
    extensionNumber: string

    /// <summary>
    /// Call queue status
    /// Enum: Enabled, Disabled, NotActivated
    /// </summary>
    status: string

    /// <summary>
    /// Call queue service level settings
    /// </summary>
    serviceLevelSettings: CallQueueServiceLevelSettings

    /// <summary>
    /// Allows members to change their queue status
    /// </summary>
    editableMemberStatus: boolean
}

export default CallQueueDetails