import PersonalContactResource from "./PersonalContactResource.js";
import UserContactsNavigationInfo from "./UserContactsNavigationInfo.js";
import UserContactsPagingInfo from "./UserContactsPagingInfo.js";
import UserContactsGroupsInfo from "./UserContactsGroupsInfo.js";

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
