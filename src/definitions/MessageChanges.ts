class MessageChanges
{
  /**
   * Message type
   * Enum: Voicemail, SMS, Fax, Pager
   */
  type?: string

  /**
   * The number of new messages. Can be omitted if the value is zero
   */
  newCount?: number

  /**
   * The number of updated messages. Can be omitted if the value is zero
   */
  updatedCount?: number
}

export default MessageChanges
