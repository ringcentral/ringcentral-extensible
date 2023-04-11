import PageNavigationUri from './PageNavigationUri';

/**
 * Links to other pages of the current result set
*/
interface PageNavigationModel {
  /**
   */
  firstPage?: PageNavigationUri;

  /**
   */
  nextPage?: PageNavigationUri;

  /**
   */
  previousPage?: PageNavigationUri;

  /**
   */
  lastPage?: PageNavigationUri;
}

export default PageNavigationModel;
