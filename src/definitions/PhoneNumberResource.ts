import {CountryResource, PhoneNumberExtensionInfo} from '.';

class PhoneNumberResource {
  /**
   * Internal identifier of a phone number
   */
  id?: string;

  /**
   * Brief information on a phone number country
   */
  country?: CountryResource;

  /**
   * Information on an extension to which the phone number is assigned
   */
  extension?: PhoneNumberExtensionInfo;

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
   */
  usageType?:
    | 'CompanyNumber'
    | 'MainCompanyNumber'
    | 'AdditionalCompanyNumber'
    | 'DirectNumber'
    | 'CompanyFaxNumber'
    | 'ForwardedNumber'
    | 'ForwardedCompanyNumber'
    | 'ContactCenterNumber';

  /**
   * Type of a phone number
   */
  type?: 'VoiceFax' | 'FaxOnly' | 'VoiceOnly';
}

export default PhoneNumberResource;
