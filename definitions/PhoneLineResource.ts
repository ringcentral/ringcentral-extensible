import PhoneNumberResourceIntId from './PhoneNumberResourceIntId'
import EmergencyAddress from './EmergencyAddress'

class PhoneLineResource
{
    /**
     * Enum: Unknown, Standalone, StandaloneFree, BlaPrimary, BlaSecondary, BLF
     */
    lineType: string

    /**
     */
    phoneInfo: PhoneNumberResourceIntId

    /**
     */
    emergencyAddress: EmergencyAddress
}

export default PhoneLineResource