import GetExtensionListInfoResponse from "./GetExtensionListInfoResponse.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default GetExtensionListResponse;
