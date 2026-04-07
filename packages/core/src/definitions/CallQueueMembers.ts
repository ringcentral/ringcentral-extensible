import type CallQueueMemberInfo from "./CallQueueMemberInfo.js";
import type EnumeratedPagingModel from "./EnumeratedPagingModel.js";
import type PageNavigationModel from "./PageNavigationModel.js";

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
