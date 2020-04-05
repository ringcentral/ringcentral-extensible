import PhoneNumberResourceIntId from './PhoneNumberResourceIntId'
import EmergencyAddress from './EmergencyAddress'

class PhoneLineResource
{
    /// <summary>
    /// Enum: Unknown, Standalone, StandaloneFree, BlaPrimary, BlaSecondary, BLF
    /// </summary>
    lineType: string

    /// <summary>
    /// </summary>
    phoneInfo: PhoneNumberResourceIntId

    /// <summary>
    /// </summary>
    emergencyAddress: EmergencyAddress
}

export default PhoneLineResource