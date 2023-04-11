interface MessageChanges {
  /**
   * Type of messages to be collected
   * Example: Fax
   */
  type?: ('EMail' | 'Fax' | 'SMS' | 'VoiceMail' | 'Pager' | 'Text');

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
