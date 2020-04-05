import DevicePhoneNumberCountryInfo from './DevicePhoneNumberCountryInfo'

class DevicePhoneNumberInfo
{
    /// <summary>
    /// Internal identifier of a phone number
    /// </summary>
    id: number

    /// <summary>
    /// Brief information on a phone number country
    /// </summary>
    country: DevicePhoneNumberCountryInfo

    /// <summary>
    /// Payment type. 'External' is returned for forwarded numbers which are not terminated in the RingCentral phone system = ['External', 'TollFree', 'Local'],
    /// Enum: External, TollFree, Local
    /// </summary>
    paymentType: string

    /// <summary>
    /// Phone number
    /// </summary>
    phoneNumber: string

    /// <summary>
    /// Enum: CompanyNumber, MainCompanyNumber, AdditionalCompanyNumber, DirectNumber, CompanyFaxNumber, ForwardedNumber, ForwardedCompanyNumber, ContactCenterNumber
    /// </summary>
    usageType: string

    /// <summary>
    /// Type of a phone number
    /// Enum: VoiceFax, FaxOnly, VoiceOnly
    /// </summary>
    type: string
}

export default DevicePhoneNumberInfo