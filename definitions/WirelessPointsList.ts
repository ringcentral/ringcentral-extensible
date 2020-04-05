import WirelessPointInfo from './WirelessPointInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class WirelessPointsList
{
    /// <summary>
    /// Link to the wireless point list resource
    /// </summary>
    uri: string

    /// <summary>
    /// List of wireless points with assigned emergency addresses
    /// </summary>
    records: WirelessPointInfo[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: ProvisioningNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: ProvisioningPagingInfo
}

export default WirelessPointsList