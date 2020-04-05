import SwitchSiteInfo from './SwitchSiteInfo'
import LocationUpdatesEmergencyAddressInfo from './LocationUpdatesEmergencyAddressInfo'

class SwitchInfo
{
    /// <summary>
    /// Link to the network switch resource
    /// </summary>
    uri: string

    /// <summary>
    /// Internal identifier of a network switch
    /// </summary>
    id: string

    /// <summary>
    /// Unique identifier of a network switch
    /// </summary>
    chassisId: string

    /// <summary>
    /// Name of a network switch
    /// </summary>
    name: string

    /// <summary>
    /// Site data
    /// </summary>
    site: SwitchSiteInfo

    /// <summary>
    /// Emergency address assigned to the switch. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
    /// </summary>
    emergencyAddress: LocationUpdatesEmergencyAddressInfo

    /// <summary>
    /// Emergency response location (address) internal identifier. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
    /// </summary>
    emergencyLocationId: string
}

export default SwitchInfo