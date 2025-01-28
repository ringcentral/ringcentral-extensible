import SiteMemberInfo from "./SiteMemberInfo";
import PageNavigationModel from "./PageNavigationModel";
import EnumeratedPagingModel from "./EnumeratedPagingModel";

interface SiteMembersList {
  /**
   * Link to a site members list resource
   * Format: uri
   */
  uri?: string;

  /** */
  records?: SiteMemberInfo[];

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default SiteMembersList;
