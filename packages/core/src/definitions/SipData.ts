/**
 * SIP (Session Initiation Protocol) information.
 * Returned if query parameter sipData is set to 'True'
 *
 */
interface SipData {
  /**
   * Recipient's data
   */
  toTag?: string;

  /**
   * Sender's data
   */
  fromTag?: string;

  /**
   * SIP call identifier
   */
  callId?: string;
}

export default SipData;
