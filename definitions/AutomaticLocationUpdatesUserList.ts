import AutomaticLocationUpdatesUserInfo from './AutomaticLocationUpdatesUserInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class AutomaticLocationUpdatesUserList
{
    /**
     * Link to the users list resource
     */
    uri?: string

    /**
     */
    records?: AutomaticLocationUpdatesUserInfo[]

    /**
     */
    navigation?: ProvisioningNavigationInfo

    /**
     */
    paging?: ProvisioningPagingInfo
}

export default AutomaticLocationUpdatesUserList