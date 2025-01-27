import GrantInfo from "./GrantInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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
