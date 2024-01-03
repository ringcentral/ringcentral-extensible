/**
 * Query parameters for operation listAccountPhoneNumbersV2
 */
interface ListAccountPhoneNumbersV2Parameters {
  /**
   * The result set page number (1-indexed) to return
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 1
   * Default: 1
   */
  page?: number;

  /**
   * The number of items per page. If provided value in the request
   *  is greater than a maximum, the maximum value is applied
   * Maximum: 1000
   * Minimum: 1
   * Format: int32
   * Example: 100
   * Default: 100
   */
  perPage?: number;

  /**
   * Types of phone numbers to be returned
   */
  type?: ('VoiceFax' | 'VoiceOnly' | 'FaxOnly')[];

  /**
   * Usage type(s) of phone numbers to be returned
   */
  usageType?: (
    | 'MainCompanyNumber'
    | 'DirectNumber'
    | 'Inventory'
    | 'InventoryPartnerBusinessMobileNumber'
    | 'PartnerBusinessMobileNumber'
    | 'AdditionalCompanyNumber'
    | 'CompanyNumber'
    | 'PhoneLine'
    | 'CompanyFaxNumber'
    | 'ForwardedNumber'
    | 'ForwardedCompanyNumber'
    | 'ContactCenterNumber'
    | 'ConferencingNumber'
    | 'MeetingsNumber'
    | 'BusinessMobileNumber'
    | 'ELIN'
  )[];

  /**
   * Status of a phone number. If the value is 'Normal', the phone number is ready to be used. Otherwise it is an external number not yet ported to RingCentral
   */
  status?: 'Normal' | 'Pending' | 'PortedIn' | 'Temporary' | 'Unknown';

  /**
   * Indicates if a number is toll or toll-free
   * Example: Toll
   */
  tollType?: 'Toll' | 'TollFree';

  /**
   * Extension status
   */
  extensionStatus?: 'Enabled' | 'Disabled' | 'Frozen' | 'NotActivated' | 'Unassigned';

  /**
   * Phone number in e.164 format to be searched for.
   *  Parameter value can include wildcards (e.g. ''+165012345**'')
   *  or be an exact number ''+16501234500'' - single number is searched in that case.
   *  Make sure you escape the ''+'' in the URL as ''%2B'''
   */
  phoneNumber?: string;
}

export default ListAccountPhoneNumbersV2Parameters;
