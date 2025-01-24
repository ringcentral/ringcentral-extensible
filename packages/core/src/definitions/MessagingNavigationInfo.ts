import type MessagingNavigationInfoURI from "./MessagingNavigationInfoURI";

/**
 * Information on navigation
 */
interface MessagingNavigationInfo {
  /** */
  firstPage?: MessagingNavigationInfoURI;

  /** */
  nextPage?: MessagingNavigationInfoURI;

  /** */
  previousPage?: MessagingNavigationInfoURI;

  /** */
  lastPage?: MessagingNavigationInfoURI;
}

export default MessagingNavigationInfo;
