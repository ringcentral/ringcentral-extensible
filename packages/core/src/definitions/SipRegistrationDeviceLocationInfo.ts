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

  /**
   * Address format statuses
   */
  addressFormatStatus?: "Actual" | "Outdated" | "Deprecated";
}

export default SipRegistrationDeviceLocationInfo;
