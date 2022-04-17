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
   */
  navigation?: MessagingNavigationInfo;

  /**
   */
  paging?: MessagingPagingInfo;
}
export default ListFaxCoverPagesResponse;
