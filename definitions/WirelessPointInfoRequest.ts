import AutomaticLocationUpdatesSiteInfo from './AutomaticLocationUpdatesSiteInfo'
import LocationUpdatesEmergencyAddressInfoRequest from './LocationUpdatesEmergencyAddressInfoRequest'

class WirelessPointInfoRequest
{
    /// <summary>
    /// Internal identifier of a wireless point
    /// </summary>
    id: string

    /// <summary>
    /// Unique 48-bit identifier of the wireless access point complying with MAC address conventions
    /// </summary>
    bssid: string

    /// <summary>
    /// Wireless access point name
    /// </summary>
    name: string

    /// <summary>
    /// Site data (internal identifier and custom name of a site)
    /// </summary>
    site: AutomaticLocationUpdatesSiteInfo

    /// <summary>
    /// Emergency address assigned to the wireless point. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
    /// </summary>
    emergencyAddress: LocationUpdatesEmergencyAddressInfoRequest

    /// <summary>
    /// Emergency response location (address) internal identifier. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
    /// </summary>
    emergencyLocationId: string
}

export default WirelessPointInfoRequest