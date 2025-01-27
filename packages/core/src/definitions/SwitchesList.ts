import SwitchInfo from "./SwitchInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface SwitchesList {
  /**
   * Switches map
   */
  records?: SwitchInfo[];

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default SwitchesList;
