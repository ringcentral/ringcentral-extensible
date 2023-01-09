interface DeviceExtensionInfo {
  /**
   * Internal identifier of an extension
   * Format: int64
   */
  id?: number;

  /**
   * Canonical URL of an extension resource
   * Format: uri
   */
  uri?: string;

  /**
   * Short extension number
   */
  extensionNumber?: string;
}

export default DeviceExtensionInfo;
