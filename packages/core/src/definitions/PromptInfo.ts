interface PromptInfo {
  /**
   * Internal identifier of a prompt
   * Format: uri
   */
  uri?: string;

  /**
   * Link to a prompt metadata
   */
  id?: string;

  /**
   * Type of prompt media content
   */
  contentType?: string;

  /**
   * Link to a prompt media content
   * Format: uri
   */
  contentUri?: string;

  /**
   * Name of a prompt
   */
  filename?: string;
}

export default PromptInfo;
