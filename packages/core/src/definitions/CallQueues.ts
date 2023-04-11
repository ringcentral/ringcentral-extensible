import CallQueueInfo from './CallQueueInfo';
import PageNavigationModel from './PageNavigationModel';
import EnumeratedPagingModel from './EnumeratedPagingModel';

interface CallQueues {
  /**
   * Link to a call queues resource
   * Required
   * Format: uri
   */
  uri?: string;

  /**
   * List of call queues
   * Required
   */
  records?: CallQueueInfo[];

  /**
   * Required
   */
  navigation?: PageNavigationModel;

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default CallQueues;
