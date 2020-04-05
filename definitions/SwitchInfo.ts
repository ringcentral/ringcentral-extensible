import SwitchSiteInfo from './SwitchSiteInfo'
import LocationUpdatesEmergencyAddressInfo from './LocationUpdatesEmergencyAddressInfo'

class SwitchInfo
{
    /**
     * Link to the network switch resource
     */
    uri: string

    /**
     * Internal identifier of a network switch
     */
    id: string

    /**
     * Unique identifier of a network switch
     */
    chassisId: string

    /**
     * Name of a network switch
     */
    name: string

    /**
     * Site data
     */
    site: SwitchSiteInfo

    /**
     * Emergency address assigned to the switch. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
     */
    emergencyAddress: LocationUpdatesEmergencyAddressInfo

    /**
     * Emergency response location (address) internal identifier. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
     */
    emergencyLocationId: string
}

export default SwitchInfo