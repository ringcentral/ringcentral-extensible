import CallMonitoringGroup from "./CallMonitoringGroup.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

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
