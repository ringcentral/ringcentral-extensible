class DeleteMessageByFilterParameters
{
    /**
     */
    conversationId: string[]

    /**
     * Messages received earlier then the date specified will be deleted. The default value is current datetime
     */
    dateTo: string

    /**
     * Type of messages to be deleted
     * Default: All
     * Enum: Fax, SMS, VoiceMail, Pager, Text, All
     */
    type: string
}

export default DeleteMessageByFilterParameters