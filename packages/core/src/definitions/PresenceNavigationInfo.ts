import PresenceNavigationInfoURI from './PresenceNavigationInfoURI';

/**
 * Information on navigation
*/
interface PresenceNavigationInfo {
  /**
   */
  firstPage?: PresenceNavigationInfoURI;

  /**
   */
  nextPage?: PresenceNavigationInfoURI;

  /**
   */
  previousPage?: PresenceNavigationInfoURI;

  /**
   */
  lastPage?: PresenceNavigationInfoURI;
}

export default PresenceNavigationInfo;
