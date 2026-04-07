interface PresetInfo {
  /**
   * Link to a greeting resource
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a greeting
   */
  id?: string;

  /**
   * Name of a greeting
   */
  name?: string;
}

export default PresetInfo;
