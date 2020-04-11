class DeleteMessageByFilterParameters
{
  /**
   */
  conversationId?: string[]

  /**
   * Messages received earlier then the date specified will be deleted. The default value is current datetime
   */
  dateTo?: string

  /**
   * Type of messages to be deleted
   * Default: All
   */
  type?: ('Fax' | 'SMS' | 'VoiceMail' | 'Pager' | 'Text' | 'All')
}

export default DeleteMessageByFilterParameters
