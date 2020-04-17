import { LocationUpdatesEmergencyAddressInfoRequest } from '.'

class PrivateIpRangeInfoRequest
{
  /**
   */
  id?: string

  /**
   */
  startIp?: string

  /**
   */
  endIp?: string

  /**
   * Network name
   */
  name?: string

  /**
   * Emergency address information. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
   */
  emergencyAddress?: LocationUpdatesEmergencyAddressInfoRequest

  /**
   * Emergency response location (address) internal identifier. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
   */
  emergencyLocationId?: string
}

export default PrivateIpRangeInfoRequest
