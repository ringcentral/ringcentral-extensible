import type SwitchInfo from './SwitchInfo';
import type PageNavigationModel from './PageNavigationModel';
import type EnumeratedPagingModel from './EnumeratedPagingModel';

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
