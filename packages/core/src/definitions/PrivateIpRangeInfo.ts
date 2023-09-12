import PrivateIpRangeInfoEmergencyAddress from './PrivateIpRangeInfoEmergencyAddress';

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
   * Emergency address information (or information assigned to the switch or
 *  wireless point - in case of using them). Only one of a pair `emergencyAddress`
 *  or `emergencyLocationId` should be specified, otherwise an error is returned
   */
  emergencyAddress?: PrivateIpRangeInfoEmergencyAddress;

  /**
   * Emergency response location (address) internal identifier.
 *  Only one of a pair `emergencyAddress` or `emergencyLocationId` should
 *  be specified, otherwise an error is returned
   */
  emergencyLocationId?: string;

  /**
   */
  matched?: boolean;
}

export default PrivateIpRangeInfo;
