import EmergencyServiceAddressResourceRequest from './EmergencyServiceAddressResourceRequest'
import DeviceUpdateExtensionInfo from './DeviceUpdateExtensionInfo'
import DeviceUpdatePhoneLinesInfo from './DeviceUpdatePhoneLinesInfo'

class AccountDeviceUpdate
{
    /// <summary>
    /// Address for emergency cases. The same emergency address is assigned to all numbers of a single device
    /// </summary>
    emergencyServiceAddress: EmergencyServiceAddressResourceRequest

    /// <summary>
    /// Information on extension that the device is assigned to
    /// </summary>
    extension: DeviceUpdateExtensionInfo

    /// <summary>
    /// Information on phone lines added to a device
    /// </summary>
    phoneLines: DeviceUpdatePhoneLinesInfo

    /// <summary>
    /// Supported only for devices assigned to Limited extensions. If true, enables users to log in to this phone as a common phone.
    /// </summary>
    useAsCommonPhone: boolean
}

export default AccountDeviceUpdate