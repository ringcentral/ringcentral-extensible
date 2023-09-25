import type OptOutResponse from './OptOutResponse';
import type PagingResource from './PagingResource';

/**
 * The list of opt outs
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
