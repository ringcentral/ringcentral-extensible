/**
 * Information on extension, for which this presence data is returned
 */
interface GetPresenceExtensionInfo {
  /**
   * Internal identifier of an extension
   * Format: int64
   */
  id?: number;

  /**
   * Canonical URI of an extension
   * Format: uri
   */
  uri?: string;

  /**
   * Extension number (usually 3 or 4 digits)
   */
  extensionNumber?: string;
}

export default GetPresenceExtensionInfo;
