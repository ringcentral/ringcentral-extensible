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
}

export default DeviceEmergencyLocationInfo;
