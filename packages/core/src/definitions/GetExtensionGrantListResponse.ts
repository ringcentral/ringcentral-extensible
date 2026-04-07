import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type GrantInfo from "./GrantInfo.js";
import type PageNavigationModel from "./PageNavigationModel.js";

interface GetExtensionGrantListResponse {
  /**
   * Link to the list of extension grants
   * Format: uri
   */
  uri?: string;

  /**
   * List of extension grants with details
   * Required
   */
  records?: GrantInfo[];

  /**
   * Required
   */
  navigation?: PageNavigationModel;

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default GetExtensionGrantListResponse;
