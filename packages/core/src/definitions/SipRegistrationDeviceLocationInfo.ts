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

  /**
   * Specifies emergency address validation during the ERL creation/update.
   *  If set to 'true', then address validation for non-US addresses is skipped
   */
  trusted?: boolean;
}

export default SipRegistrationDeviceLocationInfo;
