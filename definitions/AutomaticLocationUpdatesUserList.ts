import AutomaticLocationUpdatesUserInfo from './AutomaticLocationUpdatesUserInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class AutomaticLocationUpdatesUserList
{
    /// <summary>
    /// Link to the users list resource
    /// </summary>
    uri: string

    /// <summary>
    /// </summary>
    records: AutomaticLocationUpdatesUserInfo[]

    /// <summary>
    /// </summary>
    navigation: ProvisioningNavigationInfo

    /// <summary>
    /// </summary>
    paging: ProvisioningPagingInfo
}

export default AutomaticLocationUpdatesUserList