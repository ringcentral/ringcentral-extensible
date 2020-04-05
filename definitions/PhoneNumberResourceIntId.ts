import CountryResource from './CountryResource'
import PhoneNumberExtensionInfo from './PhoneNumberExtensionInfo'

class PhoneNumberResourceIntId
{
    /// <summary>
    /// Internal identifier of a phone number
    /// </summary>
    id: number

    /// <summary>
    /// Brief information on a phone number country
    /// </summary>
    country: CountryResource

    /// <summary>
    /// Information on an extension to which the phone number is assigned
    /// </summary>
    extension: PhoneNumberExtensionInfo

    /// <summary>
    /// Custom user name of a phone number, if any
    /// </summary>
    label: string

    /// <summary>
    /// Location (City, State). Filled for local US numbers
    /// </summary>
    location: string

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
    /// Status of a phone number. If the value is 'Normal', the phone number is ready to be used. Otherwise it is an external number not yet ported to RingCentral ,
    /// </summary>
    status: string

    /// <summary>
    /// Enum: CompanyNumber, MainCompanyNumber, AdditionalCompanyNumber, DirectNumber, CompanyFaxNumber, ForwardedNumber, ForwardedCompanyNumber, ContactCenterNumber
    /// </summary>
    usageType: string

    /// <summary>
    /// Type of a phone number
    /// Enum: VoiceFax, FaxOnly, VoiceOnly
    /// </summary>
    type: string

    /// <summary>
    /// Internal identifier of a phone number reservation; encoded data including reservation type (by brand, by account, by session), particular brand/account/session data, and reservation date and time
    /// </summary>
    reservationId: string
}

export default PhoneNumberResourceIntId