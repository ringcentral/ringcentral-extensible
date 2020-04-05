import PersonalContactResource from './PersonalContactResource'
import UserContactsNavigationInfo from './UserContactsNavigationInfo'
import UserContactsPagingInfo from './UserContactsPagingInfo'
import UserContactsGroupsInfo from './UserContactsGroupsInfo'

class ContactList
{
    /// <summary>
    /// link to the list of user personal contacts
    /// </summary>
    uri: string

    /// <summary>
    /// List of personal contacts from the extension address book
    /// </summary>
    records: PersonalContactResource[]

    /// <summary>
    /// Information on navigation
    /// </summary>
    navigation: UserContactsNavigationInfo

    /// <summary>
    /// Information on paging
    /// </summary>
    paging: UserContactsPagingInfo

    /// <summary>
    /// Information on address book groups
    /// </summary>
    groups: UserContactsGroupsInfo
}

export default ContactList