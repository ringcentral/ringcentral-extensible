import UserContactsNavigationInfoUri from './UserContactsNavigationInfoUri';

/**
 * Information on navigation
*/
interface UserContactsNavigationInfo {
  /**
   */
  firstPage?: UserContactsNavigationInfoUri;

  /**
   */
  nextPage?: UserContactsNavigationInfoUri;

  /**
   */
  previousPage?: UserContactsNavigationInfoUri;

  /**
   */
  lastPage?: UserContactsNavigationInfoUri;
}

export default UserContactsNavigationInfo;
