import AutomaticLocationUpdatesSiteInfo from './AutomaticLocationUpdatesSiteInfo'
import LocationUpdatesEmergencyAddressInfoRequest from './LocationUpdatesEmergencyAddressInfoRequest'

class UpdateWirelessPoint
{
    /**
     * Internal identifier of a wireless point
     */
    id?: string

    /**
     * Unique 48-bit identifier of wireless access point complying with MAC address conventions. Mask: XX:XX:XX:XX:XX:XX, where X can be a symbol in the range of 0-9 or A-F
     */
    bssid?: string

    /**
     * Wireless access point name
     */
    name?: string

    /**
     * Site data. If multi-site feature is turned on for the account, then internal identifier of a site must be specified. To assign the wireless point to the main site (company) set site ID to `main-site`
     */
    site?: AutomaticLocationUpdatesSiteInfo

    /**
     * Emergency address information. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
     */
    emergencyAddress?: LocationUpdatesEmergencyAddressInfoRequest

    /**
     * Internal identifier of the emergency response location (address). Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
     */
    emergencyLocationId?: string
}

export default UpdateWirelessPoint