import type FaxCoverPageInfo from './FaxCoverPageInfo';
import type PageNavigationModel from './PageNavigationModel';
import type EnumeratedPagingModel from './EnumeratedPagingModel';

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
