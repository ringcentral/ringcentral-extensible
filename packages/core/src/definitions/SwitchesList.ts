import SwitchInfo from './SwitchInfo';
import PageNavigationModel from './PageNavigationModel';
import EnumeratedPagingModel from './EnumeratedPagingModel';

interface SwitchesList {
  /**
   * Switches map
   */
  records?: SwitchInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default SwitchesList;
