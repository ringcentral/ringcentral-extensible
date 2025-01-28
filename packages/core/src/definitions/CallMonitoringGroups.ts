import CallMonitoringGroup from "./CallMonitoringGroup";
import PageNavigationModel from "./PageNavigationModel";
import EnumeratedPagingModel from "./EnumeratedPagingModel";

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
