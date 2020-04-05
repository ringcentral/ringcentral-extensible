import ContactAddressInfoDevices from './ContactAddressInfoDevices'

class ExtensionContactInfo
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
    /// Email of extension user
    /// </summary>
    email: string

    /// <summary>
    /// Extension user contact phone number
    /// </summary>
    businessPhone: string

    /// <summary>
    /// Business address of extension user company
    /// </summary>
    businessAddress: ContactAddressInfoDevices
}

export default ExtensionContactInfo