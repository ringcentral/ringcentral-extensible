import FaxCoverPageInfo from "./FaxCoverPageInfo";
import PageNavigationModel from "./PageNavigationModel";
import EnumeratedPagingModel from "./EnumeratedPagingModel";

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
