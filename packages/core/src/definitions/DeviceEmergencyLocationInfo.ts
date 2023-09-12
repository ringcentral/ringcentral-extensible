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
   * Address format id
   */
  addressFormatId?: string;
}

export default DeviceEmergencyLocationInfo;
