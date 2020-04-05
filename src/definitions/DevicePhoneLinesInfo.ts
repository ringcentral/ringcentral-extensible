import DevicePhoneLinesEmergencyAddressInfo from './DevicePhoneLinesEmergencyAddressInfo'
import DevicePhoneNumberInfo from './DevicePhoneNumberInfo'

class DevicePhoneLinesInfo
{
  /**
   * Type of phone line
   * Enum: Standalone, StandaloneFree, BlaPrimary, BlaSecondary
   */
  lineType?: string

  /**
   */
  emergencyAddress?: DevicePhoneLinesEmergencyAddressInfo

  /**
   * Phone number information
   */
  phoneInfo?: DevicePhoneNumberInfo
}

export default DevicePhoneLinesInfo
