import { DevicePhoneLinesEmergencyAddressInfo, DevicePhoneNumberInfo } from '.'

class DevicePhoneLinesInfo
{
  /**
   * Type of phone line
   */
  lineType?: ('Standalone' | 'StandaloneFree' | 'BlaPrimary' | 'BlaSecondary')

  /**
   */
  emergencyAddress?: DevicePhoneLinesEmergencyAddressInfo

  /**
   * Phone number information
   */
  phoneInfo?: DevicePhoneNumberInfo
}

export default DevicePhoneLinesInfo
