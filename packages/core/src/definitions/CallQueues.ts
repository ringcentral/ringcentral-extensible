import {
  CallQueueInfo,
  ProvisioningNavigationInfo,
  ProvisioningPagingInfo,
} from './index';

class CallQueues {
  /**
   * Link to a call queues resource
   * Required
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
