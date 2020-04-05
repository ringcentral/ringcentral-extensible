import NetworkInfo from './NetworkInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class NetworksList
{
    /**
     * Link to a networks resource
     */
    uri?: string

    /**
     */
    records?: NetworkInfo[]

    /**
     */
    navigation?: ProvisioningNavigationInfo

    /**
     */
    paging?: ProvisioningPagingInfo
}

export default NetworksList