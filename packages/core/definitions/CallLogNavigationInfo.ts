import {CallLogNavigationInfoURI} from '.';

class CallLogNavigationInfo {
  /**
   * Canonical URI for the first page of the list
   */
  firstPage?: CallLogNavigationInfoURI;

  /**
   * Canonical URI for the next page of the list
   */
  nextPage?: CallLogNavigationInfoURI;

  /**
   * Canonical URI for the previous page of the list
   */
  previousPage?: CallLogNavigationInfoURI;

  /**
   * Canonical URI for the last page of the list
   */
  lastPage?: CallLogNavigationInfoURI;
}

export default CallLogNavigationInfo;
