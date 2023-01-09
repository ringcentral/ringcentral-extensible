import OptOutResponse from './OptOutResponse';
import PagingResource from './PagingResource';

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
