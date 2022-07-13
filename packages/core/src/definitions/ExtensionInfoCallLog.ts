/**
 * Information on extension
*/
interface ExtensionInfoCallLog {
  /**
   * Internal identifier of an extension
   * Format: int64
   */
  id?: number;

  /**
   * Canonical URI of an extension
   */
  uri?: string;
}

export default ExtensionInfoCallLog;
