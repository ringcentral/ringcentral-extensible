import CallHandlingNavigationInfoUri from './CallHandlingNavigationInfoUri';

/**
 * Information on navigation
*/
class CallHandlingNavigationInfo {
  /**
   */
  firstPage?: CallHandlingNavigationInfoUri;

  /**
   */
  nextPage?: CallHandlingNavigationInfoUri;

  /**
   */
  previousPage?: CallHandlingNavigationInfoUri;

  /**
   */
  lastPage?: CallHandlingNavigationInfoUri;
}

export default CallHandlingNavigationInfo;
