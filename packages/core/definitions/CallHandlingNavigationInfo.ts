import {CallHandlingNavigationInfoUri} from './index';

// Information on navigation
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
