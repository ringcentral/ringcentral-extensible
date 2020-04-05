import DevicePhoneLinesEmergencyAddressInfo from './DevicePhoneLinesEmergencyAddressInfo'
import DevicePhoneNumberInfo from './DevicePhoneNumberInfo'

class DevicePhoneLinesInfo
{
    /// <summary>
    /// Type of phone line
    /// Enum: Standalone, StandaloneFree, BlaPrimary, BlaSecondary
    /// </summary>
    lineType: string

    /// <summary>
    /// </summary>
    emergencyAddress: DevicePhoneLinesEmergencyAddressInfo

    /// <summary>
    /// Phone number information
    /// </summary>
    phoneInfo: DevicePhoneNumberInfo
}

export default DevicePhoneLinesInfo