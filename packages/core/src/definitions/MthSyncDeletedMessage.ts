interface MthSyncDeletedMessage {
  /**
   * Required
   */
  recordType?: "DeletedMessage";

  /**
   * Internal identifier of a message
   * Required
   */
  id?: string;

  /**
   * Internal identifier of a message thread
   * Required
   */
  threadId?: string;

  /**
   * Message availability status
   * Required
   */
  availability?: "Deleted";

  /**
   * Message last modification date/time
   * Required
   * Format: date-time
   */
  lastModifiedTime?: string;
}

export default MthSyncDeletedMessage;
