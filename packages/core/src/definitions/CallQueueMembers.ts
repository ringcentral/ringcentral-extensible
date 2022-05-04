import CallQueueMemberInfo from './CallQueueMemberInfo';
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo';
import ProvisioningPagingInfo from './ProvisioningPagingInfo';

class CallQueueMembers {
  /**
   * Link to a call queue members resource
   * Required
   */
  uri?: string;

  /**
   * List of call queue members
   * Required
   */
  records?: CallQueueMemberInfo[];

  /**
   * Required
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   * Required
   */
  paging?: ProvisioningPagingInfo;
}

export default CallQueueMembers;
