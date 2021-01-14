import {
  EmergencyServiceAddressResourceRequest,
  DeviceEmergencyInfo,
  DeviceUpdateExtensionInfo,
  DeviceUpdatePhoneLinesInfo,
} from './index';

class AccountDeviceUpdate {
  /**
   */
  emergencyServiceAddress?: EmergencyServiceAddressResourceRequest;

  /**
   */
  emergency?: DeviceEmergencyInfo;

  /**
   */
  extension?: DeviceUpdateExtensionInfo;

  /**
   */
  phoneLines?: DeviceUpdatePhoneLinesInfo;

  /**
   * Supported only for devices assigned to Limited extensions. If true, enables users to log in to this phone as a common phone.
   */
  useAsCommonPhone?: boolean;
}

export default AccountDeviceUpdate;
