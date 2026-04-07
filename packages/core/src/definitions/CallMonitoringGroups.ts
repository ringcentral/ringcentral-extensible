import type CallMonitoringGroup from "./CallMonitoringGroup.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type PageNavigationModel from "./PageNavigationModel.js";

interface CallMonitoringGroups {
  /**
   * Link to a call monitoring groups resource
   * Required
   * Format: uri
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
  navigation?: PageNavigationModel;

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default CallMonitoringGroups;
