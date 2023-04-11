import AutomaticLocationUpdatesUserInfo from './AutomaticLocationUpdatesUserInfo';
import PageNavigationModel from './PageNavigationModel';
import EnumeratedPagingModel from './EnumeratedPagingModel';

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
