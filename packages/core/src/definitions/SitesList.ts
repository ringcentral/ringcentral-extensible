import SiteInfo from "./SiteInfo";
import PageNavigationModel from "./PageNavigationModel";
import EnumeratedPagingModel from "./EnumeratedPagingModel";

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
