interface MessageChanges {
  /**
   * Type of the message
   */
  type?: "Fax" | "SMS" | "VoiceMail" | "Pager";

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

  /**
   * Identifiers of the new messages, applicable for all message types
   */
  newMessageIds?: number[];
}

export default MessageChanges;
