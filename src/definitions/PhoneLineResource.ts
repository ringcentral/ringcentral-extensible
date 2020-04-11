import PhoneNumberResourceIntId from './PhoneNumberResourceIntId'
import EmergencyAddress from './EmergencyAddress'

class PhoneLineResource
{
  /**
   */
  lineType?: ('Unknown' | 'Standalone' | 'StandaloneFree' | 'BlaPrimary' | 'BlaSecondary' | 'BLF')

  /**
   */
  phoneInfo?: PhoneNumberResourceIntId

  /**
   */
  emergencyAddress?: EmergencyAddress
}

export default PhoneLineResource
