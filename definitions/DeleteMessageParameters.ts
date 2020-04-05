class DeleteMessageParameters
{
    /// <summary>
    /// If the value is 'True', then the message is purged immediately with all the attachments
    /// </summary>
    purge: boolean

    /// <summary>
    /// Internal identifier of a message thread
    /// </summary>
    conversationId: number
}

export default DeleteMessageParameters