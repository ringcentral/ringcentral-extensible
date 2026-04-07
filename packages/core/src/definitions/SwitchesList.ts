import type SwitchInfo from "./SwitchInfo.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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
