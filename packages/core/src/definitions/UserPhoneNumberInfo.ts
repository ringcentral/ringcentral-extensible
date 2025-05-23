import CountryInfoBasicModel from "./CountryInfoBasicModel.js";
import ContactCenterProvider from "./ContactCenterProvider.js";
import UserPhoneNumberExtensionInfo from "./UserPhoneNumberExtensionInfo.js";

interface UserPhoneNumberInfo {
  /**
   * Link to the user phone number resource
   * Format: uri
   */
  uri?: string;

  /**
   * Internal identifier of a phone number
   * Format: int64
   */
  id?: number;

  /** */
  country?: CountryInfoBasicModel;

  /** */
  contactCenterProvider?: ContactCenterProvider;

  /** */
  extension?: UserPhoneNumberExtensionInfo;

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
    | "ExternalNumberProviderTollFree";

  /**
   * Phone number
   */
  phoneNumber?: string;

  /**
   * Indicates if a phone number is primary, i.e. displayed as 'main number' and called by default
   */
  primary?: boolean;

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
   * Extension subtype, if applicable.
   *  For unrecognized subtypes the `Unknown` value is returned
   */
  subType?:
    | "VideoPro"
    | "VideoProPlus"
    | "DigitalSignage"
    | "Unknown"
    | "Emergency";

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
    | "ForwardedNumber"
    | "ForwardedCompanyNumber"
    | "ContactCenterNumber"
    | "ConferencingNumber"
    | "MeetingsNumber"
    | "NumberPool"
    | "NumberStorage"
    | "BusinessMobileNumber"
    | "PartnerBusinessMobileNumber"
    | "IntegrationNumber";

  /**
   * List of features of a phone number
   */
  features?: (
    | "CallerId"
    | "SmsSender"
    | "A2PSmsSender"
    | "MmsSender"
    | "InternationalSmsSender"
    | "Delegated"
  )[];
}

export default UserPhoneNumberInfo;
