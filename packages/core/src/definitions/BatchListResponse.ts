import MessageBatchResponse from './MessageBatchResponse';
import PagingResource from './PagingResource';

/**
 * The list of batches retrieved for an account and other filter criteria such as fromPhoneNumber, date specified in the request.
*/
interface BatchListResponse {
  /**
   * An array containing individual batches
   */
  records?: MessageBatchResponse[];

  /**
   */
  paging?: PagingResource;
}

export default BatchListResponse;
