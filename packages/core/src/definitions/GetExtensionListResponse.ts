import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type GetExtensionListInfoResponse from "./GetExtensionListInfoResponse.js";
import type PageNavigationModel from "./PageNavigationModel.js";

interface GetExtensionListResponse {
  /**
   * Link to an extension list resource
   * Format: uri
   */
  uri?: string;

  /**
   * List of extensions with extension information
   * Required
   */
  records?: GetExtensionListInfoResponse[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default GetExtensionListResponse;
