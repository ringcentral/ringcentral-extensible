import { MessageBatchInfo, PagingResource } from './index';

class MessageBatchListResponse {
  /**
   */
  records?: MessageBatchInfo[];

  /**
   */
  paging?: PagingResource;
}
export default MessageBatchListResponse;
