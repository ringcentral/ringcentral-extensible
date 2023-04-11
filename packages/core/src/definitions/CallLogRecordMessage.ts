/**
 * Linked message (Fax/Voicemail)
*/
interface CallLogRecordMessage {
  /**
   * Internal identifier of a message
   * Required
   */
  id?: string;

  /**
   * Type of a message
   * Required
   */
  type?: string;

  /**
   * Link to a message resource
   * Required
   * Format: uri
   */
  uri?: string;
}

export default CallLogRecordMessage;
