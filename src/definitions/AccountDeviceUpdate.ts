import { EmergencyServiceAddressResourceRequest, DeviceUpdateExtensionInfo, DeviceUpdatePhoneLinesInfo } from '.'

class AccountDeviceUpdate
{
  /**
   * Address for emergency cases. The same emergency address is assigned to all numbers of a single device
   */
  emergencyServiceAddress?: EmergencyServiceAddressResourceRequest

  /**
   * Information on extension that the device is assigned to
   */
  extension?: DeviceUpdateExtensionInfo

  /**
   * Information on phone lines added to a device
   */
  phoneLines?: DeviceUpdatePhoneLinesInfo

  /**
   * Supported only for devices assigned to Limited extensions. If true, enables users to log in to this phone as a common phone.
   */
  useAsCommonPhone?: boolean
}

export default AccountDeviceUpdate
