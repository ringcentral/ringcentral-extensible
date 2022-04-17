import {
  CallQueueMemberInfo,
  ProvisioningNavigationInfo,
  ProvisioningPagingInfo,
} from './index';

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
