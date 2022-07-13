import OptOutResponse from './OptOutResponse';
import PagingResource from './PagingResource';

/**
 * Opt-out phone numbers information
*/
interface OptOutListResponse {
  /**
   * List of individual opt-out number records
   */
  records?: OptOutResponse[];

  /**
   */
  paging?: PagingResource;
}

export default OptOutListResponse;
