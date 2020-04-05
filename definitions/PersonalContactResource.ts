import ContactAddressInfo from './ContactAddressInfo'

class PersonalContactResource
{
    /// <summary>
    /// Canonical URI of the contact
    /// </summary>
    uri: string

    /// <summary>
    /// This property has a special meaning only on Address Book Sync (e.g. a contact can be `Deleted`). For simple contact list reading it has always the default value - `Alive`
    /// Enum: Alive, Deleted, Purged
    /// </summary>
    availability: string

    /// <summary>
    /// Email of the contact
    /// </summary>
    email: string

    /// <summary>
    /// Internal identifier of the contact
    /// </summary>
    id: number

    /// <summary>
    /// Notes for the contact
    /// </summary>
    notes: string

    /// <summary>
    /// Company name of the contact
    /// </summary>
    company: string

    /// <summary>
    /// First name of the contact
    /// </summary>
    firstName: string

    /// <summary>
    /// Last name of the contact
    /// </summary>
    lastName: string

    /// <summary>
    /// Job title of the contact
    /// </summary>
    jobTitle: string

    /// <summary>
    /// Date of birth of the contact
    /// </summary>
    birthday: string

    /// <summary>
    /// The contact home page URL
    /// </summary>
    webPage: string

    /// <summary>
    /// Middle name of the contact
    /// </summary>
    middleName: string

    /// <summary>
    /// Nick name of the contact
    /// </summary>
    nickName: string

    /// <summary>
    /// 2nd email of the contact
    /// </summary>
    email2: string

    /// <summary>
    /// 3rd email of the contact
    /// </summary>
    email3: string

    /// <summary>
    /// Home phone number of the contact in e.164 (with "+") format
    /// </summary>
    homePhone: string

    /// <summary>
    /// 2nd home phone number of the contact in e.164 (with "+") format
    /// </summary>
    homePhone2: string

    /// <summary>
    /// Business phone of the contact in e.164 (with "+") format
    /// </summary>
    businessPhone: string

    /// <summary>
    /// 2nd business phone of the contact in e.164 (with "+") format
    /// </summary>
    businessPhone2: string

    /// <summary>
    /// Mobile phone of the contact in e.164 (with "+") format
    /// </summary>
    mobilePhone: string

    /// <summary>
    /// Business fax number of the contact in e.164 (with "+") format
    /// </summary>
    businessFax: string

    /// <summary>
    /// Company number of the contact in e.164 (with "+") format
    /// </summary>
    companyPhone: string

    /// <summary>
    /// Phone number of the contact assistant in e.164 (with "+") format
    /// </summary>
    assistantPhone: string

    /// <summary>
    /// Car phone number of the contact in e.164 (with "+") format
    /// </summary>
    carPhone: string

    /// <summary>
    /// Other phone number of the contact in e.164 (with "+") format
    /// </summary>
    otherPhone: string

    /// <summary>
    /// Other fax number of the contact in e.164 (with "+") format
    /// </summary>
    otherFax: string

    /// <summary>
    /// Callback phone number of the contact in e.164 (with "+") format
    /// </summary>
    callbackPhone: string

    /// <summary>
    /// </summary>
    businessAddress: ContactAddressInfo

    /// <summary>
    /// </summary>
    homeAddress: ContactAddressInfo

    /// <summary>
    /// </summary>
    otherAddress: ContactAddressInfo
}

export default PersonalContactResource