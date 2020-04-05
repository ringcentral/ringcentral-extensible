import SwitchInfo from './SwitchInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class SwitchesList
{
    /// <summary>
    /// Link to the switches list resource
    /// </summary>
    uri: string

    /// <summary>
    /// Switches map
    /// </summary>
    records: SwitchInfo[]

    /// <summary>
    /// </summary>
    navigation: ProvisioningNavigationInfo

    /// <summary>
    /// </summary>
    paging: ProvisioningPagingInfo
}

export default SwitchesList