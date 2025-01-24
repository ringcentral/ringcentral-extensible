import type SiteMemberInfo from "./SiteMemberInfo";
import type PageNavigationModel from "./PageNavigationModel";
import type EnumeratedPagingModel from "./EnumeratedPagingModel";

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
