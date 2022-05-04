import { CallMonitoringGroup, ProvisioningNavigationInfo, ProvisioningPagingInfo } from './index';

class CallMonitoringGroups {
  /**
   * Link to a call monitoring groups resource
   * Required
   */
  uri?: string;

  /**
   * List of call monitoring group members
   * Required
   */
  records?: CallMonitoringGroup[];

  /**
   * Required
   */
  navigation?: ProvisioningNavigationInfo;

  /**
   * Required
   */
  paging?: ProvisioningPagingInfo;
}
export default CallMonitoringGroups;
