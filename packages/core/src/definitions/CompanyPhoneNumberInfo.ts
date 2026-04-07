import type ExtensionInfo from "./ExtensionInfo.js";
import type TemporaryNumberInfo from "./TemporaryNumberInfo.js";
import type ContactCenterProvider from "./ContactCenterProvider.js";

interface CompanyPhoneNumberInfo {
  /**
   * Link to a company phone number resource
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a phone number
   * Format: int64
   */
  id?: number;

  /**
   */
  extension?: ExtensionInfo;

  /**
   * Custom user-defined name of a phone number, if any
   */
  label?: string;

  /**
   * Location (City, State). Filled for local US numbers
   */
  location?: string;

  /**
   * Payment type. 'External' is returned for forwarded numbers
   *  which are not terminated in the RingCentral phone system
   */
  paymentType?:
    | "External"
    | "TollFree"
    | "Local"
    | "BusinessMobileNumberProvider"
    | "ExternalNumberProvider"
    | "ExternalNumberProviderTollFree"
    | "Mobile";

  /**
   * Phone number
   */
  phoneNumber?: string;

  /**
   * Status of a phone number. If the value is `Normal`, the phone
   *  number is ready to be used. Otherwise, it is an external number not yet
   *  ported to RingCentral
   */
  status?: "Normal" | "Pending" | "PortedIn" | "Temporary" | "Unknown";

  /**
   * Type of a phone number
   */
  type?: "VoiceFax" | "VoiceOnly" | "FaxOnly";

  /**
   * Usage type of a phone number. Numbers of 'NumberPool' and 'NumberStorage' type are not returned in
   *  phone number list requests
   */
  usageType?:
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
    | "InventoryMobileNumber";

  /**
   */
  temporaryNumber?: TemporaryNumberInfo;

  /**
   */
  contactCenterProvider?: ContactCenterProvider;

  /**
   * Vanity pattern for this number. Returned only when vanity search option is requested. Vanity pattern corresponds to request parameters `nxx` plus `line` or `numberPattern`
   */
  vanityPattern?: string;

  /**
   * Specifies if a phone number is primary, i.e. displayed as 'main number' and called by default
   */
  primary?: boolean;

  /**
   * Phone number activation status. Determine whether phone number migration is completed on the partner side.
   */
  activationStatus?: "Active" | "Inactive";

  /**
   * Caller ID Name
   */
  callerIdName?: string;
}

export default CompanyPhoneNumberInfo;
