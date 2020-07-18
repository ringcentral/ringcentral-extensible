import {CallHandlingNavigationInfoUri} from '.';

class CallHandlingNavigationInfo {
  /**
   * Canonical URI for the first page of the list
   */
  firstPage?: CallHandlingNavigationInfoUri;

  /**
   * Canonical URI for the next page of the list
   */
  nextPage?: CallHandlingNavigationInfoUri;

  /**
   * Canonical URI for the previous page of the list
   */
  previousPage?: CallHandlingNavigationInfoUri;

  /**
   * Canonical URI for the last page of the list
   */
  lastPage?: CallHandlingNavigationInfoUri;
}

export default CallHandlingNavigationInfo;
