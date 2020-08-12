import {
  FaxCoverPageInfo,
  MessagingNavigationInfo,
  MessagingPagingInfo,
} from './index';

class ListFaxCoverPagesResponse {
  /**
   */
  uri?: string;

  /**
   */
  records?: FaxCoverPageInfo[];

  /**
   * Information on navigation
   */
  navigation?: MessagingNavigationInfo;

  /**
   * Information on paging
   */
  paging?: MessagingPagingInfo;
}

export default ListFaxCoverPagesResponse;
