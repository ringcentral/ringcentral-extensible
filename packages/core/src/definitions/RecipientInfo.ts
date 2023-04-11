/**
 * Recipient data
*/
interface RecipientInfo {
  /**
   * Link to a recipient extension resource
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a recipient extension
   * Format: int64
   */
  id?: number;
}

export default RecipientInfo;
