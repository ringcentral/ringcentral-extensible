import type PhoneNumberInfoIntId from './PhoneNumberInfoIntId';
import type EmergencyAddress from './EmergencyAddress';

interface PhoneLinesInfo {
  /**
   * Internal identifier of a phone line
   */
  id?: string;

  /**
   * The type of a phone line
   */
  lineType?: 'Unknown' | 'Standalone' | 'StandaloneFree' | 'BlaPrimary' | 'BlaSecondary';

  /**
   */
  phoneInfo?: PhoneNumberInfoIntId;

  /**
   */
  emergencyAddress?: EmergencyAddress;
}

export default PhoneLinesInfo;
