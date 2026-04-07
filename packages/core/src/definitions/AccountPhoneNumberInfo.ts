import ContactCenterProvider from "./ContactCenterProvider.js";
import AccountPhoneNumberInfoExtension from "./AccountPhoneNumberInfoExtension.js";

interface AccountPhoneNumberInfo {
    /**
   * Phone number activation status. Determine whether phone number migration is completed on the partner side.
   */
  activationStatus?: ('Active' | 'Inactive');

  /**
   * Internal unique identifier of a phone number
   * Required
   * Example: 1162820004
   */
  id?: string;

  /**
   * Phone number in e.164 format (with '+' prefix)
   * Required
   * Example: +16501234567
   */
  phoneNumber?: string;

  /**
   * Type of a phone number
   */
  type?: ('VoiceFax' | 'VoiceOnly' | 'FaxOnly');

  /**
   * Indicates if a number is toll or toll-free
   * Required
   * Example: Toll
   */
  tollType?: ('Toll' | 'TollFree');

  /**
   * Usage type of a phone number
   * Required
   */
  usageType?: ('MainCompanyNumber' | 'DirectNumber' | 'Inventory' | 'InventoryPartnerBusinessMobileNumber' | 'InventoryFmcBusinessMobileNumber' | 'PartnerBusinessMobileNumber' | 'AdditionalCompanyNumber' | 'CompanyNumber' | 'PhoneLine' | 'CompanyFaxNumber' | 'ForwardedNumber' | 'ForwardedCompanyNumber' | 'ContactCenterNumber' | 'ConferencingNumber' | 'MeetingsNumber' | 'NumberStorage' | 'BusinessMobileNumber' | 'FmcBusinessMobileNumber' | 'ELIN' | 'InventoryMobileNumber');

  /**
   */
  byocNumber?: boolean;

  /**
   */
  mobileNumber?: boolean;

  /**
   * Indicates whether the phone number belongs to a Hot Desk device if applicable.
   */
  hotDeskNumber?: boolean;

  /**
   */
  contactCenterProvider?: ContactCenterProvider;

  /**
   * Status of a phone number. If the value is `Normal`, the phone
 *  number is ready to be used. Otherwise, it is an external number not yet
 *  ported to RingCentral
   * Required
   */
  status?: ('Normal' | 'Pending' | 'PortedIn' | 'Temporary' | 'Unknown');

  /**
   * Caller ID Name
   */
  callerIdName?: string;

  /**
   * Reference to the extension this number is assigned to. Omitted for company numbers
   */
  extension?: AccountPhoneNumberInfoExtension;

  /**
   * Internal identifier of a phone provider
   */
  providerId?: string;
}

export default AccountPhoneNumberInfo;
