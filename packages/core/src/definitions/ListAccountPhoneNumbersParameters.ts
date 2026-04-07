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
    | "FmcBusinessMobileNumber"
    | "InventoryFmcBusinessMobileNumber"
    | "ForwardedNumber"
    | "ForwardedCompanyNumber"
    | "ContactCenterNumber"
    | "ConferencingNumber"
    | "MeetingsNumber"
    | "NumberPool"
    | "BusinessMobileNumber"
    | "ELIN"
    | "PartnerBusinessMobileNumber"
    | "NumberPoolPartnerBusinessMobileNumber"
    | "NumberStorage"
    | "IntegrationNumber"
    | "InventoryMobileNumber"
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
    | "Mobile"
  )[];

  /**
   * Status of a phone number. Multiple values are supported
   */
  status?: ("Normal" | "Pending" | "PortedIn" | "Temporary" | "Unknown")[];
}

export default ListAccountPhoneNumbersParameters;
