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
   * Usage type of phone number
   */
  usageType?: (
    | 'MainCompanyNumber'
    | 'AdditionalCompanyNumber'
    | 'CompanyNumber'
    | 'DirectNumber'
    | 'CompanyFaxNumber'
    | 'ForwardedNumber'
    | 'ForwardedCompanyNumber'
    | 'ContactCenterNumber'
    | 'ConferencingNumber'
    | 'MeetingsNumber'
    | 'BusinessMobileNumber'
    | 'PartnerBusinessMobileNumber'
    | 'IntegrationNumber'
  )[];

  /**
   * Payment type. 'External' is returned for forwarded numbers
   *  which are not terminated in the RingCentral phone system
   */
  paymentType?:
    | 'External'
    | 'TollFree'
    | 'Local'
    | 'BusinessMobileNumberProvider'
    | 'ExternalNumberProvider'
    | 'ExternalNumberProviderTollFree';

  /**
   * Status of a phone number
   */
  status?: 'Normal' | 'Pending' | 'PortedIn' | 'Temporary';
}

export default ListAccountPhoneNumbersParameters;
