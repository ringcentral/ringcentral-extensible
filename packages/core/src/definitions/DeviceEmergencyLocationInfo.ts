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
}

export default DeviceEmergencyLocationInfo;
