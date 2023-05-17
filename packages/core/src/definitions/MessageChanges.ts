interface MessageChanges {
  /**
   * Type of the message
   */
  type?: ('Fax' | 'SMS' | 'VoiceMail' | 'Pager');

  /**
   * Number of new messages. Can be omitted if the value is zero
   * Format: int32
   */
  newCount?: number;

  /**
   * Number of updated messages. Can be omitted if the value is zero
   * Format: int32
   */
  updatedCount?: number;
}

export default MessageChanges;
