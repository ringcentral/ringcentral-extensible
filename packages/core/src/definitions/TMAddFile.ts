/**
 * File information
 */
interface TMAddFile {
  /**
   * Internal identifier of a file
   * Required
   */
  id?: string;

  /**
   * Link to a binary content
   * Required
   * Format: uri
   */
  contentUri?: string;

  /**
   * Name of a file
   */
  name?: string;
}

export default TMAddFile;
