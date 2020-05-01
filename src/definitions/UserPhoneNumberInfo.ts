import {
  CountryInfo,
  ContactCenterProvider,
  UserPhoneNumberExtensionInfo,
} from '.';

class UserPhoneNumberInfo {
  /**
   * Link to the user's phone number resource
   */
  uri?: string;

  /**
   * Internal identifier of a phone number
   */
  id?: number;

  /**
   * Brief information on a phone number country
   */
  country?: CountryInfo;

  /**
   * CCRN (Contact Center Routing Number) provider. If not specified then the default value 'InContact/North America' is used, its ID is '1'
   */
  contactCenterProvider?: ContactCenterProvider;

  /**
   * Information on the extension, to which the phone number is assigned. Returned only for the request of Account phone number list
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
  paymentType?: 'External' | 'TollFree' | 'Local';

  /**
   * Phone number
   */
  phoneNumber?: string;

  /**
   * Status of a phone number. If the value is 'Normal', the phone number is ready to be used. Otherwise it is an external number not yet ported to RingCentral
   */
  status?: string;

  /**
   * Phone number type
   */
  type?: 'VoiceFax' | 'FaxOnly' | 'VoiceOnly';

  /**
   * Usage type of a phone number. Numbers of 'NumberPool' type wont't be returned for phone number list requests
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
    | 'NumberPool';

  /**
   * List of features of a phone number
   */
  features?: (
    | 'CallerId'
    | 'SmsSender'
    | 'MmsSender'
    | 'InternationalSmsSender'
    | 'Delegated'
  )[];
}

export default UserPhoneNumberInfo;
