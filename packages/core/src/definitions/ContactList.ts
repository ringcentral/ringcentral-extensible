import {
  PersonalContactResource,
  UserContactsNavigationInfo,
  UserContactsPagingInfo,
  UserContactsGroupsInfo,
} from './index';

class ContactList {
  /**
   * link to the list of user personal contacts
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
