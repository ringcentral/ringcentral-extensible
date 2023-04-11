import GrantInfo from './GrantInfo';
import PageNavigationModel from './PageNavigationModel';
import EnumeratedPagingModel from './EnumeratedPagingModel';

interface GetExtensionGrantListResponse {
  /**
   * Link to the list of extension grants
   * Format: uri
   */
  uri?: string;

  /**
   * List of extension grants with details
   * Required
   */
  records?: GrantInfo[];

  /**
   * Required
   */
  navigation?: PageNavigationModel;

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default GetExtensionGrantListResponse;
