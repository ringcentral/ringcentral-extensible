/**
 * Query parameters for operation scimSearchViaGet2
*/
interface ScimSearchViaGet2Parameters {
  /**
   * Only support 'userName' or 'email' filter expressions for now
   */
  filter?: string;

  /**
   * Start index (1-based)
   * Format: int32
   * Default: 1
   */
  startIndex?: number;

  /**
   * Page size
   * Format: int32
   * Default: 100
   */
  count?: number;
}

export default ScimSearchViaGet2Parameters;
