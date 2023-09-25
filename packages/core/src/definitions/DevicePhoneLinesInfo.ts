import type DevicePhoneLinesEmergencyAddressInfo from './DevicePhoneLinesEmergencyAddressInfo';
import type DevicePhoneNumberInfo from './DevicePhoneNumberInfo';

interface DevicePhoneLinesInfo {
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
