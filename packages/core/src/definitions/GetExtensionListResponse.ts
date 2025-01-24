import type GetExtensionListInfoResponse from "./GetExtensionListInfoResponse";
import type PageNavigationModel from "./PageNavigationModel";
import type EnumeratedPagingModel from "./EnumeratedPagingModel";

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
