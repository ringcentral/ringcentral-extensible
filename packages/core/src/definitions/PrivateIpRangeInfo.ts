import type EmergencyLocationAddressResource from "./EmergencyLocationAddressResource.js";
import type EmergencyLocationInfo from "./EmergencyLocationInfo.js";

interface PrivateIpRangeInfo {
  /**
   */
  id?: string;

  /**
   */
  startIp?: string;

  /**
   */
  endIp?: string;

  /**
   * Network name
   */
  name?: string;

  /**
   */
  emergencyAddress?: EmergencyLocationAddressResource;

  /**
   */
  matched?: boolean;

  /**
   */
  emergencyLocation?: EmergencyLocationInfo;
}

export default PrivateIpRangeInfo;
