import type CountryInfoBasicModel from './CountryInfoBasicModel';
import type ContactCenterProvider from './ContactCenterProvider';
import type UserPhoneNumberExtensionInfo from './UserPhoneNumberExtensionInfo';

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

  /**
   */
  country?: CountryInfoBasicModel;

  /**
   */
  contactCenterProvider?: ContactCenterProvider;

  /**
   */
  extension?: UserPhoneNumberExtensionInfo;

  /**
   * Custom user name of a phone number, if any
   */
  label?: string;

  /**
   * Location (City, State). Filled for local US numbers
   */
  location?: string;

  /**
   * Payment type. 'External' is returned for forwarded numbers which are not terminated in the RingCentral phone system
   */
  paymentType?: 'External' | 'TollFree' | 'Local' | 'BusinessMobileNumberProvider' | 'ExternalNumberProvider';

  /**
   * Phone number
   */
  phoneNumber?: string;

  /**
   * Specifies if a phone number is primary, i.e. displayed as 'main number' and called by default
   */
  primary?: boolean;

  /**
   * Status of a phone number. If the value is 'Normal', the phone number is ready to be used. Otherwise it is an external number not yet ported to RingCentral
   */
  status?: 'Normal' | 'Pending' | 'PortedIn' | 'Temporary';

  /**
   * Phone number type
   */
  type?: 'VoiceFax' | 'FaxOnly' | 'VoiceOnly';

  /**
   * Extension sub-type, if applicable. For any unsupported sub-types the 'Unknown' value will be returned
   */
  subType?: 'VideoPro' | 'VideoProPlus' | 'DigitalSignage' | 'Unknown';

  /**
   * Usage type of a phone number. Numbers of 'NumberPool' type will not be returned for phone number list requests
   */
  usageType?:
    | 'MainCompanyNumber'
    | 'AdditionalCompanyNumber'
    | 'CompanyNumber'
    | 'DirectNumber'
    | 'CompanyFaxNumber'
    | 'ForwardedNumber'
    | 'ForwardedCompanyNumber'
    | 'ContactCenterNumber'
    | 'ConferencingNumber'
    | 'NumberPool'
    | 'BusinessMobileNumber'
    | 'PartnerBusinessMobileNumber'
    | 'IntegrationNumber';

  /**
   * List of features of a phone number
   */
  features?: ('CallerId' | 'SmsSender' | 'A2PSmsSender' | 'MmsSender' | 'InternationalSmsSender' | 'Delegated')[];
}

export default UserPhoneNumberInfo;
