import MessageBatchInfo from './MessageBatchInfo';
import PagingResource from './PagingResource';

class MessageBatchListResponse {
  /**
   */
  records?: MessageBatchInfo[];

  /**
   */
  paging?: PagingResource;
}

export default MessageBatchListResponse;
