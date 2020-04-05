import CallQueueId from './CallQueueId'

class ExtensionCallQueueUpdatePresence
{
    /// <summary>
    /// Call queue information
    /// </summary>
    callQueue: CallQueueId

    /// <summary>
    /// Call queue agent availability for calls of this queue
    /// </summary>
    acceptCalls: boolean
}

export default ExtensionCallQueueUpdatePresence