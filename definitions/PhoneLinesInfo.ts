import PhoneNumberInfoIntId from './PhoneNumberInfoIntId'
import EmergencyAddress from './EmergencyAddress'

class PhoneLinesInfo
{
    /// <summary>
    /// Internal identifier of a phone line
    /// </summary>
    id: string

    /// <summary>
    /// Type of phone line
    /// Enum: Standalone, StandaloneFree, BlaPrimary, BlaSecondary
    /// </summary>
    lineType: string

    /// <summary>
    /// Phone number information
    /// </summary>
    phoneInfo: PhoneNumberInfoIntId

    /// <summary>
    /// </summary>
    emergencyAddress: EmergencyAddress
}

export default PhoneLinesInfo