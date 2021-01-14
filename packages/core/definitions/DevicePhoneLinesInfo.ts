import {
  DevicePhoneLinesEmergencyAddressInfo,
  DevicePhoneNumberInfo,
} from './index';

class DevicePhoneLinesInfo {
  /**
   * Internal identifier of a phone line
   */
  id?: string;

  /**
   * Type of phone line
   */
  lineType?: 'Standalone' | 'StandaloneFree' | 'BlaPrimary' | 'BlaSecondary';

  /**
   */
  emergencyAddress?: DevicePhoneLinesEmergencyAddressInfo;

  /**
   */
  phoneInfo?: DevicePhoneNumberInfo;
}

export default DevicePhoneLinesInfo;
