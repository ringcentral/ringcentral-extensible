import MessageBatchInfo from './MessageBatchInfo';
import PagingResource from './PagingResource';

interface MessageBatchListResponse {
  /**
   */
  records?: MessageBatchInfo[];

  /**
   */
  paging?: PagingResource;
}

export default MessageBatchListResponse;
