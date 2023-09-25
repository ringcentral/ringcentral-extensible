import type GrantInfo from './GrantInfo';
import type PageNavigationModel from './PageNavigationModel';
import type EnumeratedPagingModel from './EnumeratedPagingModel';

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
