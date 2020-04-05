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
   * Enum: External, TollFree, Local
   */
  paymentType?: string

  /**
   * Phone number
   */
  phoneNumber?: string

  /**
   * Enum: CompanyNumber, MainCompanyNumber, AdditionalCompanyNumber, DirectNumber, CompanyFaxNumber, ForwardedNumber, ForwardedCompanyNumber, ContactCenterNumber
   */
  usageType?: string

  /**
   * Type of a phone number
   * Enum: VoiceFax, FaxOnly, VoiceOnly
   */
  type?: string
}

export default DevicePhoneNumberInfo
