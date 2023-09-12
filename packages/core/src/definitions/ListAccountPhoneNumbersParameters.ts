/**
 * Query parameters for operation listAccountPhoneNumbers
*/
interface ListAccountPhoneNumbersParameters {
  /**
   * Indicates a page number to retrieve. Only positive number values
 *  are accepted
   * Format: int32
   * Default: 1
   */
  page?: number;

  /**
   * Indicates a page size (number of items)
   * Format: int32
   * Default: 100
   */
  perPage?: number;

  /**
   * Usage type of a phone number
   */
  usageType?: ('MainCompanyNumber' | 'AdditionalCompanyNumber' | 'CompanyNumber' | 'DirectNumber' | 'CompanyFaxNumber' | 'ForwardedNumber' | 'ForwardedCompanyNumber' | 'ContactCenterNumber' | 'ConferencingNumber' | 'MeetingsNumber' | 'BusinessMobileNumber' | 'PartnerBusinessMobileNumber' | 'IntegrationNumber')[];

  /**
   * Status of a phone number. Multiple values are supported
   */
  status?: ('Normal' | 'Pending' | 'PortedIn' | 'Temporary');
}

export default ListAccountPhoneNumbersParameters;
