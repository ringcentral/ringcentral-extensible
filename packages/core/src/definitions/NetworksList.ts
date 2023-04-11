import NetworkInfo from './NetworkInfo';
import PageNavigationModel from './PageNavigationModel';
import EnumeratedPagingModel from './EnumeratedPagingModel';

interface NetworksList {
  /**
   * Link to a networks resource
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: NetworkInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default NetworksList;
