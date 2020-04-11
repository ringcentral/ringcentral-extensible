import DevicePhoneNumberCountryInfo from './DevicePhoneNumberCountryInfo'

class DevicePhoneNumberInfo
{
  /**
   * Internal identifier of a phone number
   */
  id?: number

  /**
   * Brief information on a phone number country
   */
  country?: DevicePhoneNumberCountryInfo

  /**
   * Payment type. 'External' is returned for forwarded numbers which are not terminated in the RingCentral phone system = ['External', 'TollFree', 'Local'],
   */
  paymentType?: ('External' | 'TollFree' | 'Local')

  /**
   * Phone number
   */
  phoneNumber?: string

  /**
   */
  usageType?: ('CompanyNumber' | 'MainCompanyNumber' | 'AdditionalCompanyNumber' | 'DirectNumber' | 'CompanyFaxNumber' | 'ForwardedNumber' | 'ForwardedCompanyNumber' | 'ContactCenterNumber')

  /**
   * Type of a phone number
   */
  type?: ('VoiceFax' | 'FaxOnly' | 'VoiceOnly')
}

export default DevicePhoneNumberInfo
