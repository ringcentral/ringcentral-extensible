interface MthSyncDeletedNote {
  /**
   * Required
   */
  recordType?: "DeletedNote";

  /**
   * Internal identifier of a note
   * Required
   */
  id?: string;

  /**
   * Internal identifier of a message thread
   * Required
   */
  threadId?: string;

  /**
   * Note availability status
   * Required
   */
  availability?: "Deleted";

  /**
   * Note last modification date/time
   * Required
   * Format: date-time
   */
  lastModifiedTime?: string;
}

export default MthSyncDeletedNote;
