interface PronouncedNamePromptInfo {
  /**
   */
  id?: string;

  /**
   * Link to a prompt resource
   * Format: uri
   */
  contentUri?: string;

  /**
   * Content media type
   */
  contentType?: ('audio/mpeg' | 'audio/wav');
}

export default PronouncedNamePromptInfo;
