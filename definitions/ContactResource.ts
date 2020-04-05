import AccountResource from './AccountResource'
import PhoneNumberResource from './PhoneNumberResource'
import AccountDirectoryProfileImageResource from './AccountDirectoryProfileImageResource'
import BusinessSiteResource from './BusinessSiteResource'

class ContactResource
{
    /// <summary>
    /// </summary>
    account: AccountResource

    /// <summary>
    /// </summary>
    department: string

    /// <summary>
    /// </summary>
    email: string

    /// <summary>
    /// </summary>
    extensionNumber: string

    /// <summary>
    /// First name of a contact, for user extensions only
    /// </summary>
    firstName: string

    /// <summary>
    /// Last name of a contact, for user extensions only
    /// </summary>
    lastName: string

    /// <summary>
    /// Name of a contact, for non-user extensions
    /// </summary>
    name: string

    /// <summary>
    /// </summary>
    id: string

    /// <summary>
    /// </summary>
    jobTitle: string

    /// <summary>
    /// </summary>
    phoneNumbers: PhoneNumberResource[]

    /// <summary>
    /// </summary>
    profileImage: AccountDirectoryProfileImageResource

    /// <summary>
    /// </summary>
    site: BusinessSiteResource

    /// <summary>
    /// </summary>
    status: string

    /// <summary>
    /// </summary>
    type: string
}

export default ContactResource