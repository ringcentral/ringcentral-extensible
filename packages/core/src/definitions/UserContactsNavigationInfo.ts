import UserContactsNavigationInfoUri from "./UserContactsNavigationInfoUri.js";

/**
 * Information on navigation
 */
interface UserContactsNavigationInfo {
  /** */
  firstPage?: UserContactsNavigationInfoUri;

  /** */
  nextPage?: UserContactsNavigationInfoUri;

  /** */
  previousPage?: UserContactsNavigationInfoUri;

  /** */
  lastPage?: UserContactsNavigationInfoUri;
}

export default UserContactsNavigationInfo;
