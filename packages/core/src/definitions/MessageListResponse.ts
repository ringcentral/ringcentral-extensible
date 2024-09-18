import type MessageListMessageResponse from './MessageListMessageResponse';
import type NonEnumeratedPagingModel from './NonEnumeratedPagingModel';

/**
 * List of messages retrieved for an account and other filter criteria such as `batchId` and `fromPhoneNumber` specified in the request
 */
interface MessageListResponse {
  /**
   * An array containing individual messages
   */
  records?: MessageListMessageResponse[];

  /**
   */
  paging?: NonEnumeratedPagingModel;
}

export default MessageListResponse;
