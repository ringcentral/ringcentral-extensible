import FaxCoverPageInfo from "./FaxCoverPageInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface ListFaxCoverPagesResponse {
  /**
   * Format: uri
   */
  uri?: string;

  /** */
  records?: FaxCoverPageInfo[];

  /** */
  navigation?: PageNavigationModel;

  /** */
  paging?: EnumeratedPagingModel;
}

export default ListFaxCoverPagesResponse;
