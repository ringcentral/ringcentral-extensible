import type NetworkInfo from './NetworkInfo';
import type PageNavigationModel from './PageNavigationModel';
import type EnumeratedPagingModel from './EnumeratedPagingModel';

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
