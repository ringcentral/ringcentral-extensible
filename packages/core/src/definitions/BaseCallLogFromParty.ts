/**
 * Sender/initiator caller info
*/
interface BaseCallLogFromParty {
  /**
   * The dialer phone number without modifications. Returned for inbound calls and Overlay accounts
   */
  dialerPhoneNumber?: string;
}

export default BaseCallLogFromParty;
