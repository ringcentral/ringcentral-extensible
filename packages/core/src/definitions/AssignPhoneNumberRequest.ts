import type AssignPhoneNumberRequestExtension from './AssignPhoneNumberRequestExtension';

interface AssignPhoneNumberRequest {
  /**
   * Type of phone number
   */
  type?: 'VoiceFax' | 'VoiceOnly' | 'FaxOnly';

  /**
   * Target usage type of phone number (only listed values are supported)
   * Required
   */
  usageType?: 'MainCompanyNumber' | 'CompanyNumber' | 'DirectNumber' | 'PhoneLine';

  /**
   */
  extension?: AssignPhoneNumberRequestExtension;

  /**
   */
  costCenterId?: string;
}

export default AssignPhoneNumberRequest;
