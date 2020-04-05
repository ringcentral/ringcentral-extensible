class DeleteMessageParameters
{
    /**
     * If the value is 'True', then the message is purged immediately with all the attachments
     */
    purge: boolean

    /**
     * Internal identifier of a message thread
     */
    conversationId: number
}

export default DeleteMessageParameters