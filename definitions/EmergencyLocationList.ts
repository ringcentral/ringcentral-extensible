import EmergencyLocationInfo from './EmergencyLocationInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class EmergencyLocationList
{
    /**
     */
    records: EmergencyLocationInfo[]

    /**
     * Information on navigation
     */
    navigation: ProvisioningNavigationInfo

    /**
     * Information on paging
     */
    paging: ProvisioningPagingInfo
}

export default EmergencyLocationList