import type FaxCoverPageInfo from "./FaxCoverPageInfo.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface ListFaxCoverPagesResponse {
  /**
   * Format: uri
   */
  uri?: string;

  /**
   */
  records?: FaxCoverPageInfo[];

  /**
   */
  navigation?: PageNavigationModel;

  /**
   */
  paging?: EnumeratedPagingModel;
}

export default ListFaxCoverPagesResponse;
