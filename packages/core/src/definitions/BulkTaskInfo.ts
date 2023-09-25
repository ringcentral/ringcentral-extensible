interface BulkTaskInfo {
  /**
   * Internal identifier of a task for multiple switches creation
   */
  id?: string;

  /**
   * Status of a task
   */
  status?: 'Accepted' | 'Failed';

  /**
   * Task creation time
   * Format: date-time
   */
  creationTime?: string;

  /**
   * Time of the task latest modification
   * Format: date-time
   */
  lastModifiedTime?: string;
}

export default BulkTaskInfo;
