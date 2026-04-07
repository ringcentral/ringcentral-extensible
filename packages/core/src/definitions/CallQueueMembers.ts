import CallQueueMemberInfo from "./CallQueueMemberInfo.js";
import PageNavigationModel from "./PageNavigationModel.js";
import EnumeratedPagingModel from "./EnumeratedPagingModel.js";

interface CallQueueMembers {
  /**
   * Link to a call queue members resource
   * Required
   * Format: uri
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
  navigation?: PageNavigationModel;

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default CallQueueMembers;
