import type LocationUpdatesEmergencyAddressInfoRequest from './LocationUpdatesEmergencyAddressInfoRequest';
import type ERLLocationInfo from './ERLLocationInfo';

interface PrivateIpRangeInfoRequest {
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
  emergencyAddress?: LocationUpdatesEmergencyAddressInfoRequest;

  /**
   * Emergency response location (address) internal identifier.
   *  Only one of a pair `emergencyAddress` or `emergencyLocationId` should
   *  be specified, otherwise the error is returned
   */
  emergencyLocationId?: string;

  /**
   */
  emergencyLocation?: ERLLocationInfo;
}

export default PrivateIpRangeInfoRequest;
