import type CallQueueInfo from "./CallQueueInfo";
import type PageNavigationModel from "./PageNavigationModel";
import type EnumeratedPagingModel from "./EnumeratedPagingModel";

interface CallQueueList {
  /**
   * Link to a call queues resource
   * Required
   * Format: uri
   */
  uri?: string;

  /**
   * List of call queues
   * Required
   */
  records?: CallQueueInfo[];

  /**
   * Required
   */
  navigation?: PageNavigationModel;

  /**
   * Required
   */
  paging?: EnumeratedPagingModel;
}

export default CallQueueList;
