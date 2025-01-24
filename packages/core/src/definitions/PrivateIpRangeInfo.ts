import type CommonEmergencyLocationAddressInfo from "./CommonEmergencyLocationAddressInfo";
import type EmergencyLocationInfo from "./EmergencyLocationInfo";

interface PrivateIpRangeInfo {
  /** */
  id?: string;

  /** */
  startIp?: string;

  /** */
  endIp?: string;

  /**
   * Network name
   */
  name?: string;

  /** */
  emergencyAddress?: CommonEmergencyLocationAddressInfo;

  /**
   * Emergency response location (address) internal identifier.
   *  Only one of a pair `emergencyAddress` or `emergencyLocationId` should
   *  be specified, otherwise an error is returned
   */
  emergencyLocationId?: string;

  /** */
  matched?: boolean;

  /** */
  emergencyLocation?: EmergencyLocationInfo;
}

export default PrivateIpRangeInfo;
