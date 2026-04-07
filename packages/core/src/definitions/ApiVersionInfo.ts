interface ApiVersionInfo {
  /**
   * Canonical URI of API version
   * Format: uri
   */
  uri?: string;

  /**
   * Version of the RingCentral REST API
   */
  versionString?: string;

  /**
   * Release date of this version
   * Format: date-time
   */
  releaseDate?: string;

  /**
   * URI part determining the current version
   */
  uriString?: string;
}

export default ApiVersionInfo;
