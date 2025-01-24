/**
 * Please note that the `Department` extension type corresponds to
 * 'Call Queue' extensions in modern RingCentral product terminology
 */
interface DepartmentInfo {
  /**
   * Internal identifier of a department extension
   * Format: uri
   */
  id?: string;

  /**
   * Canonical URI of an extension resource
   * Format: uri
   */
  uri?: string;

  /**
   * Short number of a department extension
   */
  extensionNumber?: string;
}

export default DepartmentInfo;
