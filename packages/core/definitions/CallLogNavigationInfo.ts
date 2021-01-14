import {CallLogNavigationInfoURI} from './index';

// Information on navigation
class CallLogNavigationInfo {
  /**
   */
  firstPage?: CallLogNavigationInfoURI;

  /**
   */
  nextPage?: CallLogNavigationInfoURI;

  /**
   */
  previousPage?: CallLogNavigationInfoURI;

  /**
   */
  lastPage?: CallLogNavigationInfoURI;
}

export default CallLogNavigationInfo;
