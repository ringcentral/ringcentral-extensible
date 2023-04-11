/**
 * Target caller info
*/
interface BaseCallLogToParty {
  /**
   * The dialed phone number without modifications. Returned for outbound calls and Overlay accounts
   */
  dialedPhoneNumber?: string;
}

export default BaseCallLogToParty;
