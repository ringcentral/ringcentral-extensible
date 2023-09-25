interface TaskAttachment {
  /**
   * File ID.
   */
  id?: string;

  /**
   * Possible value: File. Attachment type (currently, only File is possible).
   */
  type?: 'File';

  /**
   * Name of the attached file (incl. extension name).
   */
  name?: string;

  /**
   * URI
   * Format: uri
   */
  contentUri?: string;
}

export default TaskAttachment;
