import CountryInfo from './CountryInfo'
import ContactCenterProvider from './ContactCenterProvider'
import UserPhoneNumberExtensionInfo from './UserPhoneNumberExtensionInfo'

class UserPhoneNumberInfo
{
    /// <summary>
    /// Link to the user's phone number resource
    /// </summary>
    uri: string

    /// <summary>
    /// Internal identifier of a phone number
    /// </summary>
    id: number

    /// <summary>
    /// Brief information on a phone number country
    /// </summary>
    country: CountryInfo

    /// <summary>
    /// CCRN (Contact Center Routing Number) provider. If not specified then the default value 'InContact/North America' is used, its ID is '1'
    /// </summary>
    contactCenterProvider: ContactCenterProvider

    /// <summary>
    /// Information on the extension, to which the phone number is assigned. Returned only for the request of Account phone number list
    /// </summary>
    extension: UserPhoneNumberExtensionInfo

    /// <summary>
    /// Custom user name of a phone number, if any
    /// </summary>
    label: string

    /// <summary>
    /// Location (City, State). Filled for local US numbers
    /// </summary>
    location: string

    /// <summary>
    /// Payment type. 'External' is returned for forwarded numbers which are not terminated in the RingCentral phone system
    /// Enum: External, TollFree, Local
    /// </summary>
    paymentType: string

    /// <summary>
    /// Phone number
    /// </summary>
    phoneNumber: string

    /// <summary>
    /// Status of a phone number. If the value is 'Normal', the phone number is ready to be used. Otherwise it is an external number not yet ported to RingCentral
    /// </summary>
    status: string

    /// <summary>
    /// Phone number type
    /// Enum: VoiceFax, FaxOnly, VoiceOnly
    /// </summary>
    type: string

    /// <summary>
    /// Usage type of a phone number. Numbers of 'NumberPool' type wont't be returned for phone number list requests
    /// Enum: MainCompanyNumber, AdditionalCompanyNumber, CompanyNumber, DirectNumber, CompanyFaxNumber, ForwardedNumber, ForwardedCompanyNumber, ContactCenterNumber, ConferencingNumber, NumberPool
    /// </summary>
    usageType: string

    /// <summary>
    /// List of features of a phone number
    /// </summary>
    features: string[]
}

export default UserPhoneNumberInfo