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
   * Extension status
   */
  extensionStatus?:
    | "Enabled"
    | "Disabled"
    | "Frozen"
    | "NotActivated"
    | "Unassigned";

  /**
   * Usage type of a phone number
   */
  usageType?: (
    | "MainCompanyNumber"
    | "AdditionalCompanyNumber"
    | "CompanyNumber"
    | "DirectNumber"
    | "CompanyFaxNumber"
    | "ForwardedNumber"
    | "ForwardedCompanyNumber"
    | "ContactCenterNumber"
    | "ConferencingNumber"
    | "MeetingsNumber"
    | "NumberPool"
    | "NumberStorage"
    | "BusinessMobileNumber"
    | "PartnerBusinessMobileNumber"
    | "IntegrationNumber"
  )[];

  /**
   * Payment type of a phone number. Multiple values are supported
   */
  paymentType?: (
    | "External"
    | "TollFree"
    | "Local"
    | "BusinessMobileNumberProvider"
    | "ExternalNumberProvider"
    | "ExternalNumberProviderTollFree"
  )[];

  /**
   * Status of a phone number. If the value is `Normal`, the phone
   *  number is ready to be used. Otherwise, it is an external number not yet
   *  ported to RingCentral
   */
  status?: "Normal" | "Pending" | "PortedIn" | "Temporary" | "Unknown";
}

export default ListAccountPhoneNumbersParameters;
