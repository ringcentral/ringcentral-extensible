import SwitchSiteInfo from './SwitchSiteInfo'
import LocationUpdatesEmergencyAddressInfoRequest from './LocationUpdatesEmergencyAddressInfoRequest'

class CreateSwitchInfo
{
    /// <summary>
    /// Unique identifier of a network switch. The supported formats are: XX:XX:XX:XX:XX:XX (symbols 0-9 and A-F) for MAC address and X.X.X.X for IP address (symbols 0-255)
    /// Required
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
    /// Required
    /// </summary>
    emergencyAddress: LocationUpdatesEmergencyAddressInfoRequest

    /// <summary>
    /// Emergency response location (address) internal identifier. Only one of a pair `emergencyAddress` or `emergencyLocationId` should be specified, otherwise the error is returned
    /// </summary>
    emergencyLocationId: string
}

export default CreateSwitchInfo