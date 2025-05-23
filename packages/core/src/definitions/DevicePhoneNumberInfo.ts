import DevicePhoneNumberCountryInfo from "./DevicePhoneNumberCountryInfo.js";

/**
 * Phone number information
 */
interface DevicePhoneNumberInfo {
  /**
   * Internal identifier of a phone number
   * Format: int64
   */
  id?: number;

  /** */
  country?: DevicePhoneNumberCountryInfo;

  /**
   * Payment type. 'External' is returned for forwarded numbers which are not terminated in the RingCentral phone system = ['External', 'TollFree', 'Local']
   */
  paymentType?: "External" | "TollFree" | "Local";

  /**
   * Phone number
   */
  phoneNumber?: string;

  /** */
  usageType?:
    | "CompanyNumber"
    | "MainCompanyNumber"
    | "AdditionalCompanyNumber"
    | "DirectNumber"
    | "CompanyFaxNumber"
    | "ForwardedNumber"
    | "ForwardedCompanyNumber"
    | "ContactCenterNumber";

  /**
   * Type of phone number
   */
  type?: "VoiceFax" | "FaxOnly" | "VoiceOnly";
}

export default DevicePhoneNumberInfo;
