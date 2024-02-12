/**
 * Emergency response location information
 */
interface EmergencyLocationInfo {
  /**
   * Internal identifier of an emergency response location
   * Required
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

export default EmergencyLocationInfo;
