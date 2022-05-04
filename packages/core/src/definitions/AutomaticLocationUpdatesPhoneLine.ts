import { AutomaticLocationUpdatesPhoneNumberInfo } from './index';

class AutomaticLocationUpdatesPhoneLine {
  /**
   */
  lineType?: ('Unknown' | 'Standalone' | 'StandaloneFree' | 'BlaPrimary' | 'BlaSecondary' | 'BLF');

  /**
   */
  phoneInfo?: AutomaticLocationUpdatesPhoneNumberInfo;
}
export default AutomaticLocationUpdatesPhoneLine;
