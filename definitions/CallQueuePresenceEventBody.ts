class CallQueuePresenceEventBody
{
    /// <summary>
    /// Agent extension ID
    /// </summary>
    extensionId: string

    /// <summary>
    /// Call queue extension ID
    /// </summary>
    callQueueId: string

    /// <summary>
    /// Call queue agent availability for calls of this queue
    /// </summary>
    acceptCalls: boolean
}

export default CallQueuePresenceEventBody