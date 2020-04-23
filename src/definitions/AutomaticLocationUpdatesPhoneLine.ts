import { AutomaticLocationUpdatesPhoneNumberInfo } from '.'

class AutomaticLocationUpdatesPhoneLine {
  /**
   */
  lineType?: ('Unknown' | 'Standalone' | 'StandaloneFree' | 'BlaPrimary' | 'BlaSecondary' | 'BLF')

  /**
   */
  phoneInfo?: AutomaticLocationUpdatesPhoneNumberInfo
}

export default AutomaticLocationUpdatesPhoneLine
