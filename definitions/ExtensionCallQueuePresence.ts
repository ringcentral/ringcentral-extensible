import CallQueueInfo from './CallQueueInfo'

class ExtensionCallQueuePresence
{
    /// <summary>
    /// Call queue information
    /// </summary>
    callQueue: CallQueueInfo

    /// <summary>
    /// Call queue agent availability for calls of this queue
    /// </summary>
    acceptCalls: boolean
}

export default ExtensionCallQueuePresence