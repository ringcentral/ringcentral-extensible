import CallQueueInfo from './CallQueueInfo';
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo';
import ProvisioningPagingInfo from './ProvisioningPagingInfo';

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
  navigation?: ProvisioningNavigationInfo;

  /**
   * Required
   */
  paging?: ProvisioningPagingInfo;
}

export default CallQueues;
