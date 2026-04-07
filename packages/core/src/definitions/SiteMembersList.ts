import type SiteMemberInfo from "./SiteMemberInfo.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface SiteMembersList {
  /**
   * Link to a site members list resource
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: SiteMemberInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default SiteMembersList;
