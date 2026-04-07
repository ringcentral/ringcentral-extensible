/**
 * Information about extension on whose behalf a call is initiated. For Secretary call log the Boss extension info is returned
 */
interface ExtensionInfoCallLog {
  /**
   * Internal identifier of an extension
   * Required
   * Format: int64
   */
  id?: number;

  /**
   * Canonical URI of an extension
   * Required
   * Format: uri
   */
  uri?: string;
}

export default ExtensionInfoCallLog;
