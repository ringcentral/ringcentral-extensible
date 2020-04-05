import PhoneNumberInfoIntId from './PhoneNumberInfoIntId'
import EmergencyAddress from './EmergencyAddress'

class PhoneLinesInfo
{
    /**
     * Internal identifier of a phone line
     */
    id: string

    /**
     * Type of phone line
     * Enum: Standalone, StandaloneFree, BlaPrimary, BlaSecondary
     */
    lineType: string

    /**
     * Phone number information
     */
    phoneInfo: PhoneNumberInfoIntId

    /**
     */
    emergencyAddress: EmergencyAddress
}

export default PhoneLinesInfo