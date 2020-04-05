import PersonalContactResource from './PersonalContactResource'
import UserContactsNavigationInfo from './UserContactsNavigationInfo'
import UserContactsPagingInfo from './UserContactsPagingInfo'
import UserContactsGroupsInfo from './UserContactsGroupsInfo'

class ContactList
{
    /**
     * link to the list of user personal contacts
     */
    uri: string

    /**
     * List of personal contacts from the extension address book
     */
    records: PersonalContactResource[]

    /**
     * Information on navigation
     */
    navigation: UserContactsNavigationInfo

    /**
     * Information on paging
     */
    paging: UserContactsPagingInfo

    /**
     * Information on address book groups
     */
    groups: UserContactsGroupsInfo
}

export default ContactList