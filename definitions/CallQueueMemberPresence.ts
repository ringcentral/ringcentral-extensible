import CallQueueMember from './CallQueueMember'

class CallQueueMemberPresence
{
    /**
     * Call queue member information
     */
    member?: CallQueueMember

    /**
     * Private member telephony availability status applied to calls of all queues
     */
    acceptQueueCalls?: boolean

    /**
     * Call queue member availability in this particular queue
     */
    acceptCurrentQueueCalls?: boolean
}

export default CallQueueMemberPresence