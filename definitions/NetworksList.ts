import NetworkInfo from './NetworkInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class NetworksList
{
    /// <summary>
    /// Link to a networks resource
    /// </summary>
    uri: string

    /// <summary>
    /// </summary>
    records: NetworkInfo[]

    /// <summary>
    /// </summary>
    navigation: ProvisioningNavigationInfo

    /// <summary>
    /// </summary>
    paging: ProvisioningPagingInfo
}

export default NetworksList