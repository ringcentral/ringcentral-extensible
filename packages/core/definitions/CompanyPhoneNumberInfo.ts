import {
  CountryInfo,
  ExtensionInfo,
  TemporaryNumberInfo,
  ContactCenterProvider,
} from './index';

class CompanyPhoneNumberInfo {
  /**
   * Link to a company phone number resource
   */
  uri?: string;

  /**
   * Internal identifier of a phone number
   */
  id?: number;

  /**
   */
  country?: CountryInfo;

  /**
   */
  extension?: ExtensionInfo;

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
  paymentType?:
    | 'External'
    | 'TollFree'
    | 'Local'
    | 'BusinessMobileNumberProvider';

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
   * Usage type of a phone number. Usage type of a phone number. Numbers of 'NumberPool' type wont't be returned for phone number list requests
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
    | 'MeetingsNumber'
    | 'NumberPool'
    | 'BusinessMobileNumber';

  /**
   */
  temporaryNumber?: TemporaryNumberInfo;

  /**
   */
  contactCenterProvider?: ContactCenterProvider;

  /**
   * Vanity pattern for this number. Returned only when vanity search option is requested. Vanity pattern corresponds to request parameters nxx plus line or numberPattern
   */
  vanityPattern?: string;
}

export default CompanyPhoneNumberInfo;
