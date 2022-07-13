import CallLogNavigationInfoURI from './CallLogNavigationInfoURI';

/**
 * Information on navigation
*/
interface CallLogNavigationInfo {
  /**
   */
  firstPage?: CallLogNavigationInfoURI;

  /**
   */
  nextPage?: CallLogNavigationInfoURI;

  /**
   */
  previousPage?: CallLogNavigationInfoURI;
}

export default CallLogNavigationInfo;
