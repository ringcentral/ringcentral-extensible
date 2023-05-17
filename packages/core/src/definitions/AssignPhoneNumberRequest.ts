import AssignPhoneNumberRequestExtension from './AssignPhoneNumberRequestExtension';

interface AssignPhoneNumberRequest {
  /**
   * Type of a phone number
   */
  type?: ('VoiceFax' | 'VoiceOnly' | 'FaxOnly');

  /**
   * Target usage type of a phone number (only listed values are supported)
   * Required
   */
  usageType?: ('MainCompanyNumber' | 'CompanyNumber' | 'DirectNumber' | 'PhoneLine');

  /**
   */
  extension?: AssignPhoneNumberRequestExtension;

  /**
   */
  costCenterId?: string;
}

export default AssignPhoneNumberRequest;
