import CallMonitoringGroupMemberInfo from './CallMonitoringGroupMemberInfo';
import ProvisioningNavigationInfo from './ProvisioningNavigationInfo';
import ProvisioningPagingInfo from './ProvisioningPagingInfo';

class CallMonitoringGroupMemberList {
  /**
   * Link to a call monitoring group members resource
   * Required
   */
  uri?: string;

  /**
   * List of a call monitoring group members
   * Required
   */
  records?: CallMonitoringGroupMemberInfo[];

  /**
   * Required
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   * Required
   */
  paging?: ProvisioningPagingInfo;
}

export default CallMonitoringGroupMemberList;
