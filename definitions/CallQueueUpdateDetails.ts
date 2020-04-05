import CallQueueServiceLevelSettings from './CallQueueServiceLevelSettings'

class CallQueueUpdateDetails
{
    /// <summary>
    /// Call queue service level settings
    /// </summary>
    serviceLevelSettings: CallQueueServiceLevelSettings

    /// <summary>
    /// Allows members to change their queue status
    /// </summary>
    editableMemberStatus: boolean
}

export default CallQueueUpdateDetails