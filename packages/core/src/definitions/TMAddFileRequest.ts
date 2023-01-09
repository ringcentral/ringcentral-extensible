interface TMAddFileRequest {
  /**
   * Internal identifier of a file
   * Required
   */
  id?: string;

  /**
   * Link to binary content
   * Required
   * Format: uri
   */
  contentUri?: string;

  /**
   * Name of a file
   */
  name?: string;
}

export default TMAddFileRequest;
