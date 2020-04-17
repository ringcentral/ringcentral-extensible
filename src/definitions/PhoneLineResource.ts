import { PhoneNumberResourceIntId, EmergencyAddress } from '.'

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
