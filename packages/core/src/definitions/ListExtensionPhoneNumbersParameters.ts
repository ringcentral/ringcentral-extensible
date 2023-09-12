/**
 * Query parameters for operation listExtensionPhoneNumbers
*/
interface ListExtensionPhoneNumbersParameters {
  /**
   * Status of a phone number. Multiple values are supported
   */
  status?: ('Normal' | 'Pending' | 'PortedIn' | 'Temporary');

  /**
   * Usage type of a phone number
   */
  usageType?: ('MainCompanyNumber' | 'AdditionalCompanyNumber' | 'CompanyNumber' | 'DirectNumber' | 'CompanyFaxNumber' | 'ForwardedNumber' | 'ForwardedCompanyNumber' | 'BusinessMobileNumber' | 'PartnerBusinessMobileNumber' | 'IntegrationNumber')[];

  /**
   * Indicates a page number to retrieve. Only positive number values
 *  are allowed. Default value is '1'
   * Format: int32
   * Default: 1
   */
  page?: number;

  /**
   * Indicates a page size (number of items). If not specified, the value is '100' by default
   * Format: int32
   * Default: 100
   */
  perPage?: number;
}

export default ListExtensionPhoneNumbersParameters;
