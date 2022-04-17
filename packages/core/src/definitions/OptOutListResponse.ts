import { OptOutResponse, PagingResource } from './index';

/**
 * Opt-out phone numbers information
 */
class OptOutListResponse {
  /**
   * List of individual opt-out number records
   */
  records?: OptOutResponse[];

  /**
   */
  paging?: PagingResource;
}
export default OptOutListResponse;
