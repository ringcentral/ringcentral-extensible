import AutomaticLocationUpdatesSiteInfo from './AutomaticLocationUpdatesSiteInfo'
import LocationUpdatesEmergencyAddressInfoRequest from './LocationUpdatesEmergencyAddressInfoRequest'

class WirelessPointInfoRequest
{
    /**
     * Internal identifier of a wireless point
     */
    id: string

    /**
     * Unique 48-bit identifier of the wireless access point complying with MAC address conventions
     */
    bssid: string

    /**
     * Wireless access point name
     */
    name: string

    /**
     * Site data (internal identifier and custom name of a site)
     */
    site: AutomaticLocationUpdatesSiteInfo

    /**
     * Emergency address assigned to the wireless point. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
     */
    emergencyAddress: LocationUpdatesEmergencyAddressInfoRequest

    /**
     * Emergency response location (address) internal identifier. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
     */
    emergencyLocationId: string
}

export default WirelessPointInfoRequest