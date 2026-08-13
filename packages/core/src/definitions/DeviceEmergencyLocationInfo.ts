/**
 * Company emergency response location details
 */
interface DeviceEmergencyLocationInfo {
  /**
   * Internal identifier of the emergency response location
   */
  id?: string;

  /**
   * Location name
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

export default DeviceEmergencyLocationInfo;
