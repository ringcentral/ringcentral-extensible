import type AssignPhoneNumberRequestExtension from './AssignPhoneNumberRequestExtension';
import type ContactCenterProvider from './ContactCenterProvider';

interface AssignPhoneNumberRequest {
  /**
   * Type of phone number
   */
  type?: 'VoiceFax' | 'VoiceOnly' | 'FaxOnly';

  /**
   * Target usage type of phone number (only listed values are supported)
   * Required
   */
  usageType?: 'MainCompanyNumber' | 'CompanyNumber' | 'DirectNumber' | 'PhoneLine' | 'ContactCenterNumber';

  /**
   */
  extension?: AssignPhoneNumberRequestExtension;

  /**
   */
  costCenterId?: string;

  /**
   */
  contactCenterProvider?: ContactCenterProvider;
}

export default AssignPhoneNumberRequest;
