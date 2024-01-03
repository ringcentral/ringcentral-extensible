/**
 * Recipient data
 */
interface RecipientInfo {
  /**
   * Link to a voicemail recipient extension resource
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a voicemail recipient
   */
  id?: string;
}

export default RecipientInfo;
