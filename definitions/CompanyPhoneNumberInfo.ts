import CountryInfo from './CountryInfo'
import ExtensionInfo from './ExtensionInfo'
import TemporaryNumberInfo from './TemporaryNumberInfo'
import ContactCenterProvider from './ContactCenterProvider'

class CompanyPhoneNumberInfo
{
    /// <summary>
    /// Link to a company phone number resource
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
    /// Information on the extension, to which the phone number is assigned. Returned only for the request of Account phone number list
    /// </summary>
    extension: ExtensionInfo

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
    /// Usage type of a phone number. Usage type of a phone number. Numbers of 'NumberPool' type wont't be returned for phone number list requests
    /// Enum: MainCompanyNumber, AdditionalCompanyNumber, CompanyNumber, DirectNumber, CompanyFaxNumber, ForwardedNumber, ForwardedCompanyNumber, ContactCenterNumber, ConferencingNumber, MeetingsNumber, NumberPool
    /// </summary>
    usageType: string

    /// <summary>
    /// Temporary phone number, if any. Returned for phone numbers in `Pending` porting status only
    /// </summary>
    temporaryNumber: TemporaryNumberInfo

    /// <summary>
    /// CCRN (Contact Center Routing Number) provider. If not specified then the default value 'InContact/North America' is used, its ID is '1'
    /// </summary>
    contactCenterProvider: ContactCenterProvider

    /// <summary>
    /// Vanity pattern for this number. Returned only when vanity search option is requested. Vanity pattern corresponds to request parameters nxx plus line or numberPattern
    /// </summary>
    vanityPattern: string
}

export default CompanyPhoneNumberInfo