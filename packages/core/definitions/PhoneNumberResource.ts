import {DeviceCountryResource, PhoneNumberExtensionInfo} from './index';

class PhoneNumberResource {
  /**
   * Internal identifier of a phone number
   */
  id?: string;

  /**
   */
  country?: DeviceCountryResource;

  /**
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
