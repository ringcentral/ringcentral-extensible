import FaxCoverPageInfo from './FaxCoverPageInfo';
import MessagingNavigationInfo from './MessagingNavigationInfo';
import MessagingPagingInfo from './MessagingPagingInfo';

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
