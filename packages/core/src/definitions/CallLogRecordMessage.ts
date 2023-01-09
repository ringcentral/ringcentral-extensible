/**
 * Linked message (Fax/Voicemail)
*/
interface CallLogRecordMessage {
  /**
   * Internal identifier of a message
   */
  id?: string;

  /**
   * Type of a message
   */
  type?: string;

  /**
   * Link to a message resource
   * Format: uri
   */
  uri?: string;
}

export default CallLogRecordMessage;
