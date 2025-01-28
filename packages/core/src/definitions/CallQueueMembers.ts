import CallQueueMemberInfo from "./CallQueueMemberInfo";
import PageNavigationModel from "./PageNavigationModel";
import EnumeratedPagingModel from "./EnumeratedPagingModel";

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
