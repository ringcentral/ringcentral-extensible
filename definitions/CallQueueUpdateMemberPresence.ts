import CallQueueMemberId from './CallQueueMemberId'

class CallQueueUpdateMemberPresence
{
    /// <summary>
    /// Call queue member information
    /// </summary>
    member: CallQueueMemberId

    /// <summary>
    /// Call queue member availability for calls of this queue
    /// </summary>
    acceptCurrentQueueCalls: boolean
}

export default CallQueueUpdateMemberPresence