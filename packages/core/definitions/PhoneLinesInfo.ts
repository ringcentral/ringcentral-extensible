import {PhoneNumberInfoIntId, EmergencyAddress} from '.';

class PhoneLinesInfo {
  /**
   * Internal identifier of a phone line
   */
  id?: string;

  /**
   * Type of phone line
   */
  lineType?: 'Standalone' | 'StandaloneFree' | 'BlaPrimary' | 'BlaSecondary';

  /**
   * Phone number information
   */
  phoneInfo?: PhoneNumberInfoIntId;

  /**
   */
  emergencyAddress?: EmergencyAddress;
}

export default PhoneLinesInfo;
