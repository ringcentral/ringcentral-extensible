interface CallRecordingExtensionInfo {
  /**
   * Internal identifier of an extension
   */
  id?: string;

  /**
   * Link to an extension resource
   * Format: uri
   */
  uri?: string;

  /**
   * Number of an extension
   */
  extensionNumber?: string;

  /**
   * Name of an extension
   */
  name?: string;
}

export default CallRecordingExtensionInfo;
