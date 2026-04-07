import type NetworkInfo from "./NetworkInfo.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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
