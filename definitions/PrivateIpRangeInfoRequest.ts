import LocationUpdatesEmergencyAddressInfoRequest from './LocationUpdatesEmergencyAddressInfoRequest'

class PrivateIpRangeInfoRequest
{
    /// <summary>
    /// </summary>
    id: string

    /// <summary>
    /// </summary>
    startIp: string

    /// <summary>
    /// </summary>
    endIp: string

    /// <summary>
    /// Network name
    /// </summary>
    name: string

    /// <summary>
    /// Emergency address information. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
    /// </summary>
    emergencyAddress: LocationUpdatesEmergencyAddressInfoRequest

    /// <summary>
    /// Emergency response location (address) internal identifier. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
    /// </summary>
    emergencyLocationId: string
}

export default PrivateIpRangeInfoRequest