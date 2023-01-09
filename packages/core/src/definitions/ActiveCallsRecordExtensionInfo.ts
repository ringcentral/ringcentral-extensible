/**
 * Information about extension on whose behalf a call is initiated. For Secretary call log the Boss extension info is returned
*/
interface ActiveCallsRecordExtensionInfo {
  /**
   * Link to an extension on whose behalf a call is initiated
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of an extension on whose behalf a call is initiated
   */
  id?: string;
}

export default ActiveCallsRecordExtensionInfo;
