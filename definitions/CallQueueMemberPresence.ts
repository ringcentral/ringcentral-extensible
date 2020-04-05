import CallQueueMember from './CallQueueMember'

class CallQueueMemberPresence
{
    /// <summary>
    /// Call queue member information
    /// </summary>
    member: CallQueueMember

    /// <summary>
    /// Private member telephony availability status applied to calls of all queues
    /// </summary>
    acceptQueueCalls: boolean

    /// <summary>
    /// Call queue member availability in this particular queue
    /// </summary>
    acceptCurrentQueueCalls: boolean
}

export default CallQueueMemberPresence