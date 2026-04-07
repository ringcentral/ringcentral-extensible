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
   * Emergency response location (address) internal identifier.
   *  Only one of a pair `emergencyAddress` or `emergencyLocationId`
   *  can be specified, otherwise the error is returned
   */
  emergencyLocationId?: string;

  /**
   */
  matched?: boolean;

  /**
   */
  emergencyLocation?: EmergencyLocationInfo;
}

export default PrivateIpRangeInfo;
