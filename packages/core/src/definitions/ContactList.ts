import type PersonalContactResource from "./PersonalContactResource";
import type UserContactsNavigationInfo from "./UserContactsNavigationInfo";
import type UserContactsPagingInfo from "./UserContactsPagingInfo";
import type UserContactsGroupsInfo from "./UserContactsGroupsInfo";

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

  /** */
  navigation?: UserContactsNavigationInfo;

  /** */
  paging?: UserContactsPagingInfo;

  /** */
  groups?: UserContactsGroupsInfo;
}

export default ContactList;
