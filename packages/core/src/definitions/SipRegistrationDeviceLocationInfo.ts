/**
 * Company emergency response location details
 */
interface SipRegistrationDeviceLocationInfo {
  /**
   * Internal identifier of an emergency response location
   */
  id?: string;

  /**
   * Emergency response location name
   */
  name?: string;

  /**
   * Address format ID
   */
  addressFormatId?: string;
}

export default SipRegistrationDeviceLocationInfo;
