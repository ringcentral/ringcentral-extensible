import {PhoneNumberCountryInfo, DeviceProvisioningExtensionInfo} from '.';

class PhoneNumberInfoIntId {
  /**
   * Internal identifier of a phone number
   */
  id?: number;

  /**
   * Brief information on a phone number country
   */
  country?: PhoneNumberCountryInfo;

  /**
   * Information on the extension, to which the phone number is assigned. Returned only for the request of Account phone number list
   */
  extension?: DeviceProvisioningExtensionInfo;

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
   * Usage type of the phone number
   */
  usageType?:
    | 'MainCompanyNumber'
    | 'AdditionalCompanyNumber'
    | 'CompanyNumber'
    | 'DirectNumber'
    | 'CompanyFaxNumber'
    | 'ForwardedNumber'
    | 'ForwardedCompanyNumber'
    | 'ContactCenterNumber';
}

export default PhoneNumberInfoIntId;
