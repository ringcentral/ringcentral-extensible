import PersonalContactResource from './PersonalContactResource';
import UserContactsNavigationInfo from './UserContactsNavigationInfo';
import UserContactsPagingInfo from './UserContactsPagingInfo';
import UserContactsGroupsInfo from './UserContactsGroupsInfo';

interface ContactList {
  /**
   * Link to the list of user personal contacts
   * Format: uri
   */
  uri?: string;

  /**
   * List of personal contacts from the extension address book
   */
  records?: PersonalContactResource[];

  /**
   */
  navigation?: UserContactsNavigationInfo;

  /**
   */
  paging?: UserContactsPagingInfo;

  /**
   */
  groups?: UserContactsGroupsInfo;
}

export default ContactList;
