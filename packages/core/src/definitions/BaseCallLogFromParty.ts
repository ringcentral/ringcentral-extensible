/**
 * Sender/initiator caller information
*/
interface BaseCallLogFromParty {
  /**
   * Dialer phone number without any format modifications. Returned for inbound calls
   */
  dialerPhoneNumber?: string;
}

export default BaseCallLogFromParty;
