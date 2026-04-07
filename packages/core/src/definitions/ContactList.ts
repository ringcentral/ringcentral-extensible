import type PersonalContactResource from "./PersonalContactResource.js";
import type UserContactsGroupsInfo from "./UserContactsGroupsInfo.js";
import type UserContactsNavigationInfo from "./UserContactsNavigationInfo.js";
import type UserContactsPagingInfo from "./UserContactsPagingInfo.js";

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
