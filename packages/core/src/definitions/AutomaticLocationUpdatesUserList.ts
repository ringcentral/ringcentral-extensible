import type AutomaticLocationUpdatesUserInfo from './AutomaticLocationUpdatesUserInfo';
import type PageNavigationModel from './PageNavigationModel';
import type EnumeratedPagingModel from './EnumeratedPagingModel';

interface AutomaticLocationUpdatesUserList {
  /**
   * Link to the users list resource
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: AutomaticLocationUpdatesUserInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default AutomaticLocationUpdatesUserList;
