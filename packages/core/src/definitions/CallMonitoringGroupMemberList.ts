import CallMonitoringGroupMemberInfo from './CallMonitoringGroupMemberInfo';
import PageNavigationModel from './PageNavigationModel';
import EnumeratedPagingModel from './EnumeratedPagingModel';

interface CallMonitoringGroupMemberList {
  /**
   * Link to a call monitoring group members resource
   * Required
   * Format: uri
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
  navigation?: PageNavigationModel;

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default CallMonitoringGroupMemberList;
