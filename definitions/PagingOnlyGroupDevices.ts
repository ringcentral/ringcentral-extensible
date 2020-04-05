import PagingDeviceInfo from './PagingDeviceInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class PagingOnlyGroupDevices
{
    /// <summary>
    /// Link to the list of devices assigned to the paging only group
    /// </summary>
    uri: string

    /// <summary>
    /// List of paging devices assigned to this group
    /// </summary>
    records: PagingDeviceInfo[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: ProvisioningNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: ProvisioningPagingInfo
}

export default PagingOnlyGroupDevices