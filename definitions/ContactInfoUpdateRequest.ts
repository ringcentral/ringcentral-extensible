import ContactBusinessAddressInfo from './ContactBusinessAddressInfo'
import PronouncedNameInfo from './PronouncedNameInfo'

class ContactInfoUpdateRequest
{
    /// <summary>
    /// For User extension type only. Extension user first name
    /// </summary>
    firstName: string

    /// <summary>
    /// For User extension type only. Extension user last name
    /// </summary>
    lastName: string

    /// <summary>
    /// Extension user company name
    /// </summary>
    company: string

    /// <summary>
    /// </summary>
    jobTitle: string

    /// <summary>
    /// Email of extension user
    /// </summary>
    email: string

    /// <summary>
    /// Extension user contact phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) format
    /// </summary>
    businessPhone: string

    /// <summary>
    /// Extension user mobile (**non** Toll Free) phone number in [E.164](https://www.itu.int/rec/T-REC-E.164-201011-I) (with '+' sign) format
    /// </summary>
    mobilePhone: string

    /// <summary>
    /// </summary>
    businessAddress: ContactBusinessAddressInfo

    /// <summary>
    /// If 'True' then contact email is enabled as login name for this user. Please note that email should be unique in this case. The default value is 'False'
    /// </summary>
    emailAsLoginName: boolean

    /// <summary>
    /// </summary>
    pronouncedName: PronouncedNameInfo

    /// <summary>
    /// Extension user department, if any
    /// </summary>
    department: string
}

export default ContactInfoUpdateRequest