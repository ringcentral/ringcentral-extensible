import WirelessPointInfo from './WirelessPointInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class WirelessPointsList
{
  /**
   * Link to the wireless point list resource
   */
  uri?: string

  /**
   * List of wireless points with assigned emergency addresses
   */
  records?: WirelessPointInfo[]

  /**
   * Information on navigation
   */
  navigation?: ProvisioningNavigationInfo

  /**
   * Information on paging
   */
  paging?: ProvisioningPagingInfo
}

export default WirelessPointsList
