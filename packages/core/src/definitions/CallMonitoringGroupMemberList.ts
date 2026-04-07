import type CallMonitoringGroupMemberInfo from "./CallMonitoringGroupMemberInfo.js";
import type PageNavigationModel from "./PageNavigationModel.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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
