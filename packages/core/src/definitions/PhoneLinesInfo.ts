import PhoneNumberInfoIntId from './PhoneNumberInfoIntId';
import EmergencyAddress from './EmergencyAddress';

class PhoneLinesInfo {
  /**
   * Internal identifier of a phone line
   */
  id?: string;

  /**
   * Type of phone line
   */
  lineType?: ('Standalone' | 'StandaloneFree' | 'BlaPrimary' | 'BlaSecondary');

  /**
   */
  phoneInfo?: PhoneNumberInfoIntId;

  /**
   */
  emergencyAddress?: EmergencyAddress;
}

export default PhoneLinesInfo;
