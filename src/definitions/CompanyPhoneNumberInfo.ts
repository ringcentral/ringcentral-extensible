import CountryInfo from './CountryInfo'
import ExtensionInfo from './ExtensionInfo'
import TemporaryNumberInfo from './TemporaryNumberInfo'
import ContactCenterProvider from './ContactCenterProvider'

class CompanyPhoneNumberInfo
{
    /**
     * Link to a company phone number resource
     */
    uri?: string

    /**
     * Internal identifier of a phone number
     */
    id?: number

    /**
     * Brief information on a phone number country
     */
    country?: CountryInfo

    /**
     * Information on the extension, to which the phone number is assigned. Returned only for the request of Account phone number list
     */
    extension?: ExtensionInfo

    /**
     * Custom user name of a phone number, if any
     */
    label?: string

    /**
     * Location (City, State). Filled for local US numbers
     */
    location?: string

    /**
     * Payment type. 'External' is returned for forwarded numbers which are not terminated in the RingCentral phone system
     * Enum: External, TollFree, Local
     */
    paymentType?: string

    /**
     * Phone number
     */
    phoneNumber?: string

    /**
     * Status of a phone number. If the value is 'Normal', the phone number is ready to be used. Otherwise it is an external number not yet ported to RingCentral
     */
    status?: string

    /**
     * Phone number type
     * Enum: VoiceFax, FaxOnly, VoiceOnly
     */
    type?: string

    /**
     * Usage type of a phone number. Usage type of a phone number. Numbers of 'NumberPool' type wont't be returned for phone number list requests
     * Enum: MainCompanyNumber, AdditionalCompanyNumber, CompanyNumber, DirectNumber, CompanyFaxNumber, ForwardedNumber, ForwardedCompanyNumber, ContactCenterNumber, ConferencingNumber, MeetingsNumber, NumberPool
     */
    usageType?: string

    /**
     * Temporary phone number, if any. Returned for phone numbers in `Pending` porting status only
     */
    temporaryNumber?: TemporaryNumberInfo

    /**
     * CCRN (Contact Center Routing Number) provider. If not specified then the default value 'InContact/North America' is used, its ID is '1'
     */
    contactCenterProvider?: ContactCenterProvider

    /**
     * Vanity pattern for this number. Returned only when vanity search option is requested. Vanity pattern corresponds to request parameters nxx plus line or numberPattern
     */
    vanityPattern?: string
}

export default CompanyPhoneNumberInfo