import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type PagingGroupExtensionInfo from "./PagingGroupExtensionInfo.js";

interface PagingOnlyGroupUsers {
  /**
   * Link to a list of users allowed to page the Paging Only group
   * Format: uri
   */
  uri?: string;

  /**
   * List of users allowed to page the Paging Only group
   */
  records?: PagingGroupExtensionInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default PagingOnlyGroupUsers;
