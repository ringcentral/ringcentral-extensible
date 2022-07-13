import CallHandlingNavigationInfoUri from './CallHandlingNavigationInfoUri';

/**
 * Information on navigation
*/
interface CallHandlingNavigationInfo {
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
