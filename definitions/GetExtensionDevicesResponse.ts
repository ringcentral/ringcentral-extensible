import ExtensionDeviceResponse from './ExtensionDeviceResponse'
import DeviceProvisioningNavigationInfo from './DeviceProvisioningNavigationInfo'
import DeviceProvisioningPagingInfo from './DeviceProvisioningPagingInfo'

class GetExtensionDevicesResponse
{
    /// <summary>
    /// Link to the list of extension devices
    /// </summary>
    uri: string

    /// <summary>
    /// List of extension devices
    /// Required
    /// </summary>
    records: ExtensionDeviceResponse[]

    /// <summary>
    /// Information on navigation
    /// Required
    /// </summary>
    navigation: DeviceProvisioningNavigationInfo

    /// <summary>
    /// Information on paging
    /// Required
    /// </summary>
    paging: DeviceProvisioningPagingInfo
}

export default GetExtensionDevicesResponse