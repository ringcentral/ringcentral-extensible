class CallQueueInfo
{
    /// <summary>
    /// Internal identifier of a call queue
    /// </summary>
    id: string

    /// <summary>
    /// Name of a call queue
    /// </summary>
    name: string

    /// <summary>
    /// Extension number of a call queue
    /// </summary>
    extensionNumber: string

    /// <summary>
    /// Flag allow members to change their queue status
    /// </summary>
    editableMemberStatus: boolean
}

export default CallQueueInfo