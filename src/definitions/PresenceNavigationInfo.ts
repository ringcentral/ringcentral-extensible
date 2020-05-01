import {PresenceNavigationInfoURI} from '.';

class PresenceNavigationInfo {
  /**
   * Canonical URI for the first page of the list
   */
  firstPage?: PresenceNavigationInfoURI;

  /**
   * Canonical URI for the next page of the list
   */
  nextPage?: PresenceNavigationInfoURI;

  /**
   * Canonical URI for the previous page of the list
   */
  previousPage?: PresenceNavigationInfoURI;

  /**
   * Canonical URI for the last page of the list
   */
  lastPage?: PresenceNavigationInfoURI;
}

export default PresenceNavigationInfo;
