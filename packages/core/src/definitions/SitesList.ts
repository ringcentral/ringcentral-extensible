import SiteInfo from "./SiteInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface SitesList {
  /**
   * Link to a sites resource
   * Format: uri
   */
  uri?: string;

  /** */
  records?: SiteInfo[];

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default SitesList;
