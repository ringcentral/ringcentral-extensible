import AutomaticLocationUpdatesDeviceInfo from './AutomaticLocationUpdatesDeviceInfo'
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo'
import ProvisioningPagingInfo from './ProvisioningPagingInfo'

class ListDevicesAutomaticLocationUpdates
{
    /// <summary>
    /// Link to devices resource
    /// </summary>
    uri: string

    /// <summary>
    /// List of users' devices with the current status of Emergency Address Auto Update Feature
    /// </summary>
    records: AutomaticLocationUpdatesDeviceInfo[]

    /// <summary>
    /// </summary>
    navigation: ProvisioningNavigationInfo

    /// <summary>
    /// </summary>
    paging: ProvisioningPagingInfo
}

export default ListDevicesAutomaticLocationUpdates