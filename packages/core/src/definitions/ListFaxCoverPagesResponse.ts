import FaxCoverPageInfo from './FaxCoverPageInfo';
import MessagingNavigationInfo from './MessagingNavigationInfo';
import MessagingPagingInfo from './MessagingPagingInfo';

interface ListFaxCoverPagesResponse {
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
