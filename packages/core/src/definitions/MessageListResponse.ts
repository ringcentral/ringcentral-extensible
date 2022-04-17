import { MessageListMessageResponse, PagingResource } from './index';

/**
 * List of messages retrieved for an account and other filter criteria such as `batchId` and `fromPhoneNumber` specified in the request
 */
class MessageListResponse {
  /**
   * An array containing individual messages
   */
  records?: MessageListMessageResponse[];

  /**
   */
  paging?: PagingResource;
}
export default MessageListResponse;
