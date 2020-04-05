import ExtensionDeviceResponse from './ExtensionDeviceResponse'
import DeviceProvisioningNavigationInfo from './DeviceProvisioningNavigationInfo'
import DeviceProvisioningPagingInfo from './DeviceProvisioningPagingInfo'

class GetExtensionDevicesResponse
{
    /**
     * Link to the list of extension devices
     */
    uri: string

    /**
     * List of extension devices
     * Required
     */
    records: ExtensionDeviceResponse[]

    /**
     * Information on navigation
     * Required
     */
    navigation: DeviceProvisioningNavigationInfo

    /**
     * Information on paging
     * Required
     */
    paging: DeviceProvisioningPagingInfo
}

export default GetExtensionDevicesResponse