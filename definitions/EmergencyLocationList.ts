import EmergencyLocationInfo from './EmergencyLocationInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class EmergencyLocationList
{
    /// <summary>
    /// </summary>
    records: EmergencyLocationInfo[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: ProvisioningNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: ProvisioningPagingInfo
}

export default EmergencyLocationList