import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type SiteInfo from "./SiteInfo.js";

interface SitesList {
  /**
   * Link to a sites resource
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: SiteInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default SitesList;
