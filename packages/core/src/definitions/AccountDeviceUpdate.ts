import EmergencyServiceAddressResourceRequest from "./EmergencyServiceAddressResourceRequest.js";
import DeviceEmergencyInfo from "./DeviceEmergencyInfo.js";
import DeviceUpdateExtensionInfo from "./DeviceUpdateExtensionInfo.js";
import DeviceUpdatePhoneLinesInfo from "./DeviceUpdatePhoneLinesInfo.js";

interface AccountDeviceUpdate {
  /** */
  emergencyServiceAddress?: EmergencyServiceAddressResourceRequest;

  /** */
  emergency?: DeviceEmergencyInfo;

  /** */
  extension?: DeviceUpdateExtensionInfo;

  /** */
  phoneLines?: DeviceUpdatePhoneLinesInfo;

  /**
   * Supported only for devices assigned to Limited extensions.
   *  If true, enables users to log in to this phone as a common phone
   */
  useAsCommonPhone?: boolean;

  /**
   * Device label, maximum number of symbols is 64
   */
  name?: string;
}

export default AccountDeviceUpdate;
